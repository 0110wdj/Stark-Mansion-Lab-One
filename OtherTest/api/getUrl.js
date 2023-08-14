var request = require('request');
const fs = require('fs')

/* 获取某页数据 */
const getUrlList = async (page = 1) => {
  const url = 'https://www.sczwfw.gov.cn/cns-bmfw-websdt/rest/cnspublic/scwebsitecaseinfoaction/getInteractCaseInfoListByCondition'
  const requestData = { "pageSize": 20, "currentPageIndex": page, "title": "", "rqstType": "10", "webrqsttime": "", "areaCode": "510000000000" }

  request({
    url: url,//请求路径
    method: "POST",//请求方式，默认为get
    headers: {//设置请求头
      "content-type": "application/json",
    },
    body: JSON.stringify(requestData)//post参数字符串
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const obj = JSON.parse(body)
      obj.custom.infoList.forEach((item, index) => {
        fs.appendFileSync('./urllist.txt', item.handleurl + `${index !== obj.custom.infoList.length - 1 ? '\n' : ''}`)
      });
      if (page < 5) {
        getUrlList(page + 1)
      }
    }
  });
}

getUrlList()
