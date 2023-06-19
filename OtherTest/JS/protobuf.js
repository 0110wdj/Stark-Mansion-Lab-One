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
const pkg112 = `
CHASBAgBEAESjwEIAhABIogBSEVBREVSIC8gSFRUUC8xLjENCkFjY2VwdDogKi8qDQpBY2NlcHQtRGF0ZXRpbWU6ICQrJiMwMDA7JWQkUEFUSCVuXG4kK2FhYWElZCVuMWENCkhvc3Q6IDEyNy4wLjAuMjo0NjU4MQ0KVXNlci1BZ2VudDogY3VybC83Ljc4LjAtREVWDQoNChLGBQgDEAEivwWR3AK7SFRUUC8xLjAgNTAxIFVuc3VwcG9ydGVkIG1ldGhvZCAoJ0hFQURFUicpDQpTZXJ2ZXI6IFNpbXBsZUhUVFAvMC42IFB5dGhvbi8zLjEwLjYNCkRhdGU6IFdlZCwgMTQgSnVuIDIwMjMgMDM6MTI6MzkgR01UDQpDb25uZWN0aW9uOiBjbG9zZQ0KQ29udGVudC1UeXBlOiB0ZXh0L2h0bWw7Y2hhcnNldD11dGYtOA0KQ29udGVudC1MZW5ndGg6IDQ5OQ0KDQo8IURPQ1RZUEUgSFRNTCBQVUJMSUMgIi0vL1czQy8vRFREIEhUTUwgNC4wMS8vRU4iCiAgICAgICAgImh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0L3N0cmljdC5kdGQiPgo8aHRtbD4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiPgogICAgICAgIDx0aXRsZT5FcnJvciByZXNwb25zZTwvdGl0bGU+CiAgICA8L2hlYWQ+CiAgICA8Ym9keT4KICAgICAgICA8aDE+RXJyb3IgcmVzcG9uc2U8L2gxPgogICAgICAgIDxwPkVycm9yIGNvZGU6IDUwMTwvcD4KICAgICAgICA8cD5NZXNzYWdlOiBVbnN1cHBvcnRlZCBtZXRob2QgKCdIRUFERVInKS48L3A+CiAgICAgICAgPHA+RXJyb3IgY29kZSBleHBsYW5hdGlvbjogSFRUUFN0YXR1cy5OT1RfSU1QTEVNRU5URUQgLSBTZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIG9wZXJhdGlvbi48L3A+CiAgICA8L2JvZHk+CjwvaHRtbD4KEgQIAxABEgQIBRABEgQIBBABGAE=
`
const str = atob(pkg112)
const byteArray112 = new TextEncoder().encode(str);

transProto(byteArray112, 'MonitorStatus')