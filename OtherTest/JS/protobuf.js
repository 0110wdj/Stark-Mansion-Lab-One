/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-06-16 13:36:19
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-07-16 19:51:51
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\JS\protobuf.js
 * @Description: Do not edit
 */
const protobuf = require("protobufjs");
const util = protobuf.util;

/* 引入 proto 数据结构定义，获得工具实例 */
let protokit = null;
/* 解析工具集合，避免重复加载解析工具 */
const kitObj = {}

if (!protokit) {
  protobuf.load("server_interface.proto").then((res) => {
    protokit = res;
  }).catch(() => {
    console.log('加载异常，重试一次');
    protobuf.load("server_interface.proto").then((res) => {
      protokit = res;
    }).catch((e) => {
      console.log('加载失败', e);
    })
  })
}

/**
 * 字节流数组转目标对象
 * @param {string} base64 
 * @param {'Chart'|'Charts'|'MonitorStatus'|'RoundTick'|'Problem'|'Event'|'Events'} target 目标对象类型
 */
const transProto = (base64, target) => {
  if (protokit) {
    try {
      /* base64 转 字节流数组 */
      const buffer = util.newBuffer(util.base64.length(base64));
      util.base64.decode(base64, buffer, 0);
      /* 对应 target 数据结构的工具 */
      if (!kitObj[target]) {
        kitObj[target] = protokit.lookupType(target)
      }
      /* 解析结果 JSON 对象 */
      return kitObj[target].decode(buffer)
    } catch (error) {
      console.log('解码异常', error);
    }
  }
  return null
}

/* 测试代码 */
const pkgChart = ""

setTimeout(() => {

  const result = transProto(pkgChart, 'Problem')

  console.log(result);

}, 10);