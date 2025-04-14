import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import protobuf from 'protobufjs';

// 增加的工具
const util = protobuf.util;

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 默认值配置
const defaults = {
  baseDir: '/Users/liujie/Documents/gitBranch/Stark-Mansion-Lab-One/out/Data/storage',  // 默认基础目录
  testId: '3',          // 默认测试 ID
  range: '1-3'          // 默认范围
};

// 使用 Promise 包装 readline 的 question 方法
const question = (query, defaultValue) => {
  return new Promise((resolve) => {
    const prompt = defaultValue ? `${query} (默认: ${defaultValue}): ` : `${query}: `;
    rl.question(prompt, (answer) => {
      resolve(answer || defaultValue);
    });
  });
};

// 解析范围字符串，返回开始和结束数字
function parseRange(rangeStr) {
  const [start, end] = rangeStr.split('-').map(Number);
  return { start, end };
}

// pcap 生成器配置
const pcapGenerator = configure({
  linkLayerType: 150, // 自定义 linkLayerType
  Buffer: Buffer
});

function configure(_opts) {
  const isNode = typeof global === 'object';
  const bufferExists = _opts.Buffer || isNode;

  if (!bufferExists) {
    return () => {
      throw new Error('pcap-generator needs a Buffer to run');
    };
  }

  const Buffer = _opts.Buffer || global.Buffer;

  const opts = {
    majorVersion: _opts.majorVersion || 2,
    minorVersion: _opts.minorVersion || 4,
    gmtOffset: _opts.gmtOffset || 0,
    timestampAccuracy: _opts.timestampAccuracy || 0,
    snapshotLength: _opts.snapshotLength || 65535,
    linkLayerType: _opts.linkLayerType || 101
  };

  function generate(packets) {
    const globalHeader = Buffer.alloc(24);
    globalHeader.writeUInt32BE(2712847316, 0); // 4
    globalHeader.writeUInt16BE(opts.majorVersion, 4); // 2
    globalHeader.writeUInt16BE(opts.minorVersion, 6); // 2
    globalHeader.writeInt32BE(opts.gmtOffset, 8); // 4
    globalHeader.writeUInt32BE(opts.timestampAccuracy, 12); // 4
    globalHeader.writeUInt32BE(opts.snapshotLength, 16); // 4
    globalHeader.writeUInt32BE(opts.linkLayerType, 20); // 4

    packets = packets.map(packet => {
      const packetHeader = Buffer.alloc(16);
      const isTimestampMicroPrecision = isMicroseconds(packet.timestamp);
      const [seconds, microseconds] = isTimestampMicroPrecision
        ? String(packet.timestamp).split('.').map(str => Number(str))
        : [Math.floor(packet.timestamp / 1000), Math.floor(((packet.timestamp / 1000) % 1) * 1000000)];
      packetHeader.writeUInt32BE(seconds, 0); // 4
      packetHeader.writeUInt32BE(makeLessThanAMillion(microseconds), 4); // 4
      packetHeader.writeUInt32BE(packet.buffer.length + 8, 8); // 4
      packetHeader.writeUInt32BE(packet.buffer.length + 8, 12); // 4
      // 自定义包头
      const packetSmylHeader = Buffer.alloc(8);
      packetSmylHeader.writeUInt16BE(packet.protocolCode || 0, 0); // 2
      packetSmylHeader.writeUInt8(packet.basicProtocol || 0, 2); // 1
      packetSmylHeader.writeUInt8(packet.connectIndex || 0, 3); // 1
      packetSmylHeader.writeUInt32BE(packet.roundIndex || 0, 4); // 4

      return Buffer.concat([packetHeader, packetSmylHeader, packet.buffer]);
    });

    const packetsBuffer = Buffer.concat(packets);
    return Buffer.concat([globalHeader, packetsBuffer]);
  }

  generate.configure = configure;
  return generate;
}

function isMicroseconds(ts) {
  return ts % 1 !== 0;
}

function makeLessThanAMillion(i) {
  while (i > 1000000) {
    i = Math.floor(i / 10);
  }
  return i;
}

/**
 * 将 events 数据转换为 pcap 文件
 * @param {Array} events - 事件数组
 * @param {string} outputPath - 输出 pcap 文件路径
 */
async function convertEventsToPcap(events, outputPath) {
  try {
    const ipPackets = [];
    
    // 遍历所有事件
    for (const event of events) {
      if (event.type === 2 || event.type === 3) { // 只处理发送和接收数据包的事件
        const buffer = Buffer.from(event.data);
        if (buffer.length === 0) {
          continue;
        }
        
        ipPackets.push({
          connectIndex: event.type === 2 ? 0 : 128, // 发送为0，接收为128
          roundIndex: event.fileNumber, // 使用 fileNumber 作为 roundIndex
          timestamp: Date.now(),
          buffer: buffer,
          protocolCode: 0,
          basicProtocol: 0
        });
      }
    }

    if (ipPackets.length === 0) {
      console.log('没有有效的数据包可以导出');
      return;
    }

    // 生成 pcap 文件
    const pcapFile = pcapGenerator(ipPackets);
    
    // 写入文件
    fs.writeFileSync(outputPath, pcapFile);
    console.log(`Pcap 文件已生成: ${outputPath}`);
  } catch (error) {
    console.error('生成 pcap 文件时出错:', error);
    throw error;
  }
}

// 读取指定范围内的所有文件
async function readFilesInRange(baseDir, testId, rangeStr) {
  const { start, end } = parseRange(rangeStr);
  const testDir = path.join(baseDir, testId);

  if (!fs.existsSync(testDir)) {
    throw new Error(`测试目录 ${testDir} 不存在！`);
  }

  console.log(`\n正在读取测试 ${testId} 的范围 ${rangeStr} 的文件：`);
  console.log('----------------------------------------');

  // 创建数组存储非空文件内容
  const fileContents = [];

  for (let i = start; i <= end; i++) {
    const filePath = path.join(testDir, 'data', `${i}`, `${i}.data`);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      console.log(`\n文件 ${i}.data 的内容：`);
      console.log(content);
      console.log('----------------------------------------');

      // 如果文件内容不为空，则添加到数组中
      if (content.trim()) {
        try {
          // 解析 protobuf 数据
          const parsedContent = protbufDecode(content, 'Events');

          fileContents.push({
            fileNumber: i,
            content: content,
            parsedContent: parsedContent
          });
        } catch (error) {
          console.error(`解析文件 ${i}.data 时出错：`, error);
          fileContents.push({
            fileNumber: i,
            content: content,
            error: error.message
          });
        }
      }
    } else {
      console.log(`文件 ${i}.data 不存在`);
    }
  }

  // 生成 pcap 文件
  const allEvents = fileContents
    .filter(file => file.parsedContent?.events)
    .flatMap(file => file.parsedContent.events.map(event => ({
      ...event,
      fileNumber: file.fileNumber
    })));

  if (allEvents.length > 0) {
    const pcapPath = path.join(testDir, `test_${testId}_${rangeStr}.pcap`);
    await convertEventsToPcap(allEvents, pcapPath);
  }

  // 返回存储的文件内容数组
  return fileContents;
}

async function main() {
  try {
    console.log('欢迎使用测试数据读取工具！');
    console.log('请按照提示输入信息，直接回车将使用默认值。\n');

    // 获取用户输入
    const baseDir = await question('请输入基础目录路径', defaults.baseDir);
    const testId = await question('请输入测试 ID', defaults.testId);
    const range = await question('请输入要读取的范围（格式：开始-结束）', defaults.range);

    // 验证范围格式
    if (!/^\d+-\d+$/.test(range)) {
      throw new Error('范围格式不正确，请使用"开始-结束"的格式，例如：1-3');
    }

    // 读取文件并获取存储的内容数组
    const fileContents = await readFilesInRange(baseDir, testId, range);

    // 显示存储的文件内容统计信息
    console.log('\n文件内容统计：');
    console.log(`共读取到 ${fileContents.length} 个非空文件`);
    console.log('文件编号列表：', fileContents.map(item => item.fileNumber).join(', '));

    // 这里可以添加后续处理逻辑
    // 例如：console.log('存储的内容数组：', fileContents);

  } catch (error) {
    console.error('发生错误：', error.message);
  } finally {
    rl.close();
  }
}

// 运行主函数
main();

const protoContent = `
// 指定protobuf的版本proto3
syntax = "proto3";
package server_interface;

// 定义数据结构，message 你可以想象成java的class，c语言中的struct
enum State {
    Uninit = 0;
    Failed = -1;
    Alive = 1;
}

message MonitorStatus {
    // int32 alarm_value = 1;
    int32 real_value = 2;
    State state = 3;
    string message = 4;
    int32 reference_value = 5;
    string logs = 6;
    bool has_reference_value =7;
}

message Chart {
    int32 round_index = 1;
    int32 round_count = 2;
    int32 send_packet_count = 3;
    int32 receive_packet_count = 4;
    repeated MonitorStatus monitor_status = 5;
    int32 send_packet_bytes = 6;
    int32 receive_packet_bytes = 7;
    repeated RoundTick rounds = 8;
}

message Charts {
    int32 start_time = 1;
    repeated string monitor_units = 2;  //["延迟(ms)",...] 长度同monitor_status相等
    repeated Chart ticks = 3;
    message NamePath {
        repeated string name_path = 1;
    }
    repeated NamePath name_path_list = 4;
    repeated string strategy_list = 5;
}

message RoundTick {
    int32 send_packet_count = 1;
    int32 receive_packet_count = 2;
    int32 send_packet_bytes = 3;
    int32 receive_packet_bytes = 4;
    repeated MonitorStatus monitor_status = 5;
    int32 scene_id = 6;
    int32 sub_scene_id = 7;
    int32 name_path_index = 8;
    int32 strategy_index = 9;
}

message Problem {
    int32 start_round = 1;
    repeated string monitor_units = 2;  //["延迟(ms)",...] 长度同monitor_status相等
    repeated RoundTick ticks = 3;
    int32 end_round = 4;
    string scene_id = 5;
    string scene_name = 6;
    string sub_scene_id = 7;
    string sub_scene_name = 8;
    repeated string name_path = 9;
}

message Event {
    int32 type = 1;       // type: 1/建立连接  2/发送数据包  3/接收数据包  4/发送通道断开连接   5/接收通道断开连接
    bool success = 2;
    string message = 3;  // [success=false]
    bytes data = 4;      // when type is 2/3
}

message TestCaseInfo {
    string scene_name = 1;
    string sub_scene_name = 2;
    repeated string name_path = 3;
}

message Events {
    int32 round_index = 1;
    repeated Event events = 2;
    bool success = 3;  // 整轮是否成功
    string message = 4;
    string models = 5;  // json 字符串 [{type: "connect"}, {type: "send": model: "json string"}, {type: "receive",}, {type: "send_close"}, {type: "receive_close"}]
    TestCaseInfo test_case_info = 6;  // json 字符串 {"sub_scene": "Attack.IPFragment", "test_case": "IP.version -> 20"}
}
`

/**
 * base64 to JSON
 * @param {string} base64
 * @param {'Chart'|'Charts'|'MonitorStatus'|'RoundTick'|'Problem'|'Event'|'Events'} target 目标对象类型
 */
export const protbufDecode = (base64, target = 'Chart') => {
  try {
    const root = protobuf.parse(protoContent).root
    const MyMessage = root.lookupType(target)
    /* base64 转 字节流数组 */
    const buffer = util.newBuffer(util.base64.length(base64))
    util.base64.decode(base64, buffer, 0)
    const message = MyMessage.decode(new Uint8Array(buffer))
    const object = MyMessage.toObject(message, {
      defaults: true, // includes default values
    })
    return object
  } catch (error) {
    console.error('protobufDecode error:', error)
    console.error('source base64:', base64)
    return {}
  }

}