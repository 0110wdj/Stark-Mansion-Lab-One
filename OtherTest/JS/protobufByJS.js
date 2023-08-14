/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-06-29 15:49:14
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-07-19 09:35:50
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\JS\protobufByJS.js
 * @Description: Do not edit
 */
const { server_interface } = require('./proto_pb.js')
const protobuf = require("protobufjs");
const util = protobuf.util;

/* 测试代码 */
const base64 = ""


/* base64 转 字节流数组 */
const buffer = util.newBuffer(util.base64.length(base64));
util.base64.decode(base64, buffer, 0);

const res = server_interface.Problem.decode(buffer)

delete res.ticks

console.log(res);
