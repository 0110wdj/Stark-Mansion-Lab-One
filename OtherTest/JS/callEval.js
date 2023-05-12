/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-05-10 14:59:47
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-05-10 16:46:39
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\JS\callEval.js
 * @Description: Do not edit
 */
const exp = '(config.ipHostName || "") + (config.tcpPort ? (":" + config.tcpPort) : "")';
const ctx = {
  "config": {
    "ipHostName": "localhost",
    "tcpPort": 80,
    "timeout": 1000
  },
  "schema": {
    "summary": "(config.ipHostName || \"\") + (config.tcpPort ? (\":\" + config.tcpPort) : \"\")",
    "advanced": [
      {
        "field": "timeout",
        "defaultValue": 1000,
        "label": "超时时间",
        "type": "integer",
        "suffix": "ms"
      }
    ],
    "basic": [
      {
        "field": "ipHostName",
        "defaultValue": "localhost",
        "label": "主机名",
        "type": "string",
        "required": true
      },
      {
        "min": 1,
        "field": "tcpPort",
        "max": 65535,
        "defaultValue": 80,
        "label": "端口号",
        "type": "integer",
        "required": true
      }
    ]
  }
};

const test = (exp,ctx)=>{
  ; (
    function (exp,ctx) {
      for (let key in ctx) {
        this[key] = ctx[key]
      } 
     
      const res = eval(exp)
      
      console.log(res);
      // console.log(this);
      // console.log(exp);
      // console.log(ctx);
      return res
    }
  )(exp,ctx); 
}

test()
  
// eval.call(this,'var h = a === 1')

