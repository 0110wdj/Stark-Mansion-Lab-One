var request = require('request');
const fs = require('fs')

fs.readFile

var UrlListFile = './urllist.txt';

const list = []

/* 获取某页数据 */
const getDetil = async (index = 0) => {
  const url = 'https://www.sczwfw.gov.cn/cns-bmfw-websdt/rest/cnspublic/scwebsitecaseinfoaction/getCaseInfoDeatil'
  const requestData = { "token": "", "params": { "caseguid": list[index] } }

  request({
    url: url,//请求路径
    method: "POST",//请求方式，默认为get
    headers: {//设置请求头
      "content-type": "application/json",
    },
    body: JSON.stringify(requestData)//post参数字符串
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const { custom } = JSON.parse(body)
      fs.appendFileSync('./咨询标题.txt', custom.rqsttitle + '\n')
      // const str = custom.answercontent.replaceAll('\n', '').replace('：', '').replace('：', '@@@liujie@@@').replace('承办单位', '@@@liujie@@@').split('@@@liujie@@@')[1].replaceAll(' ', '')
      const str = custom.answercontent.replaceAll('\n', '').replaceAll('\r', '').replaceAll(' ', '')
      fs.appendFileSync('./咨询内容答复.txt', (str || '空') + '\n')
      fs.appendFileSync('./答复单位.txt', custom.answerou + '\n')
      fs.appendFileSync('./公开时间.txt', custom.finishtime + '\n')
      if (index < list.length - 1) {
        getDetil(index + 1)
      }
    }
  });
}

fs.readFile(UrlListFile, function (err, data) {
  if (err) {
    console.log('文件读取失败');
  } else {
    const array = data.toString().split('\n')
    array.forEach((item) => {
      list.push(item.split('cguid=')[1])
    })
    getDetil()
  }
});