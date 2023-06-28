/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-06-16 13:36:19
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-06-28 18:11:01
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\JS\protobuf.js
 * @Description: Do not edit
 */
const protobuf = require("protobufjs");

/* 引入 proto 数据结构定义，获得工具实例 */
let protokit = null;

/**
 * 字节流数组转目标对象
 * @param {*} byteArray 字节流数组
 * @param {*} target 目标对象类型
 */
const transProto = (byteArray, target) => {
  if (protokit) {
    try {
      const buffer = new Buffer.from(byteArray);
      const msg = protokit.lookupType(target);
      const message = msg.decode(buffer);
      console.log('执行一次', message);
      return message
    } catch (error) {
      console.log('转换异常');
    }
  } else {
    /* 确保先初始化再执行 */
    protobuf.load("server_interface.proto").then((res) => {
      protokit = res;
      console.log('初始化一次');
      transProto(byteArray, target)
    }).catch((e) => {
      console.log('加载异常');
    })
  }
}

/* 测试代码 */
// const pkgMonitorError = `COYVKn8QAyJ7W2luZXQvc3JjL3Byb3h5L3RjcC5yczo5Njo1NF0gW2luZXQvc3JjL3B1Ymxpc2hlci90Y3AucnM6OTI6MjRdIENhbm5vdCBjb25uZWN0IHRvIHRhcmdldDogQ29ubmVjdGlvbiByZWZ1c2VkIChvcyBlcnJvciAxMTEpKiYiJOivt+axguWksei0pSBlcnJvciB0cnlpbmcgdG8gY29ubmVjdA==`
const pkgChart = `CPMGEA0YDSAaKioIARAIGAEiIjMwMSBNb3ZlZCBQZXJtYW5lbnRseSDor7fmsYLmiJDlip8qCggBEBgYASICT0s=`

// const strpkgMonitorError = atob(pkgMonitorError)
const setpkgChart = atob(pkgChart)

// const byteArraystrpkgMonitorError = new TextEncoder().encode(strpkgMonitorError);
const byteArraysetpkgChart = new TextEncoder().encode(setpkgChart);

transProto(byteArraysetpkgChart, 'Chart')