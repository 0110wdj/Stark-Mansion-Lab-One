var request = require('request');
const fs = require('fs')

/* 获取某页数据 */
const getUrlList = async (page = 1) => {
  const url = 'https://www.sczwfw.gov.cn/cns-bmfw-websdt/rest/cnspublic/scwebsitecaseinfoaction/getInteractCaseInfoListByCondition'
  const requestData = { "pageSize": 20, "currentPageIndex": page, "title": "", "rqstType": "10", "webrqsttime": "", "areaCode": "510000000000" }

  // "rqstType": "10" 咨询, "15" 建议, "20" 投诉

  request({
    url: url,//请求路径
    method: "POST",//请求方式，默认为get
    headers: {//设置请求头
      "content-type": "application/json",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    },
    body: JSON.stringify(requestData) //post参数字符串
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const obj = JSON.parse(body)
      obj.custom.infoList.forEach((item, index) => {
        fs.appendFileSync('./urllist.txt', item.handleurl + `${index !== obj.custom.infoList.length - 1 ? '\n' : ''}`)
      });
      if (page < 3) {
        getUrlList(page + 1)
      }
    } else {
      console.log({ error });
      console.log({ statusCode: response.statusCode });
    }
  });
}

getUrlList()
