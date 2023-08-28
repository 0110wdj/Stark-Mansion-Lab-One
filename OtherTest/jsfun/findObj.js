/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-08-28 15:39:34
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-08-28 15:58:40
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\jsfun\findObj.js
 * @Description: Do not edit
 */

// 根据树结构节点id从树结构数据中获取节点数据
function getTreeName(treeList, id) {
  for (let i = 0; i < treeList.length; i++) {
    let treeItem = treeList[i]
    if (treeItem.id === id) {
      return treeItem
    } else {
      if (treeItem.fields && treeItem.fields.length > 0) {
        let res = getTreeName(treeItem.fields, id)
        if (res) {
          return res
        }
      }
    }
  }
  return {}
}

const source = {
  "mutateModelConfig": {
    "mutateEnabled": true,
    "shuffleEnabled": true,
    "user_define": "",
    "fields": [
      {
        "defaultMaxLength": 10,
        "name": "Method",
        "charsets": [
          "UTF-8",
          "ANSI",
          "ASCII"
        ],
        "id": "HTTPRequest.Method",
        "fields": [
          {
            'id': 'test',
            'value': 'testValue',
          }
        ],
        "type": "string",
        "maxLength": 100,
        "mutateEnabled": true,
        "config": {
          "maxLength": 10,
          "charsets": [
            "UTF-8",
            "ANSI",
            "ASCII"
          ],
          "dict": [],
          "fileName": "",
          "user_define": ""
        }
      },
      {
        "defaultMaxLength": 100,
        "name": "Path",
        "charsets": [
          "UTF-8",
          "ANSI",
          "ASCII"
        ],
        "id": "HTTPRequest.Path",
        "type": "string",
        "maxLength": 1000,
        "mutateEnabled": true,
        "config": {
          "maxLength": 100,
          "charsets": [
            "UTF-8",
            "ANSI",
            "ASCII"
          ],
          "dict": [],
          "fileName": "",
          "user_define": ""
        }
      },
      {
        "defaultMaxLength": 10,
        "name": "Http_Version",
        "charsets": [
          "UTF-8",
          "ANSI",
          "ASCII"
        ],
        "id": "HTTPRequest.Http_Version",
        "type": "string",
        "maxLength": 1000,
        "mutateEnabled": true,
        "config": {
          "maxLength": 10,
          "charsets": [
            "UTF-8",
            "ANSI",
            "ASCII"
          ],
          "dict": [],
          "fileName": "",
          "user_define": ""
        }
      },
      {
        "name": "A_IM",
        "id": "HTTPRequest.A_IM",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Accept",
        "id": "HTTPRequest.Accept",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Accept_Charset",
        "id": "HTTPRequest.Accept_Charset",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Accept_Datetime",
        "id": "HTTPRequest.Accept_Datetime",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Accept_Encoding",
        "id": "HTTPRequest.Accept_Encoding",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Accept_Language",
        "id": "HTTPRequest.Accept_Language",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Access_Control_Request_Headers",
        "id": "HTTPRequest.Access_Control_Request_Headers",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Access_Control_Request_Method",
        "id": "HTTPRequest.Access_Control_Request_Method",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Authorization",
        "id": "HTTPRequest.Authorization",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Cache_Control",
        "id": "HTTPRequest.Cache_Control",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Connection",
        "id": "HTTPRequest.Connection",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Content_Length",
        "id": "HTTPRequest.Content_Length",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Content_MD5",
        "id": "HTTPRequest.Content_MD5",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Content_Type",
        "id": "HTTPRequest.Content_Type",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Cookie",
        "id": "HTTPRequest.Cookie",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "DNT",
        "id": "HTTPRequest.DNT",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "defaultMaxLength": 100,
        "name": "Date",
        "charsets": [
          "UTF-8",
          "ANSI",
          "ASCII"
        ],
        "id": "HTTPRequest.Date",
        "type": "string",
        "maxLength": 1000,
        "mutateEnabled": true,
        "config": {
          "maxLength": 100,
          "charsets": [
            "UTF-8",
            "ANSI",
            "ASCII"
          ],
          "dict": [],
          "fileName": "",
          "user_define": ""
        }
      },
      {
        "name": "Expect",
        "id": "HTTPRequest.Expect",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Forwarded",
        "id": "HTTPRequest.Forwarded",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "From",
        "id": "HTTPRequest.From",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Front_End_Https",
        "id": "HTTPRequest.Front_End_Https",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "HTTP2_Settings",
        "id": "HTTPRequest.HTTP2_Settings",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "defaultMaxLength": 100,
        "name": "Host",
        "charsets": [
          "UTF-8",
          "ANSI",
          "ASCII"
        ],
        "id": "HTTPRequest.Host",
        "type": "string",
        "maxLength": 1000,
        "mutateEnabled": true,
        "config": {
          "maxLength": 100,
          "charsets": [
            "UTF-8",
            "ANSI",
            "ASCII"
          ],
          "dict": [],
          "fileName": "",
          "user_define": ""
        }
      },
      {
        "name": "If_Match",
        "id": "HTTPRequest.If_Match",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "If_Modified_Since",
        "id": "HTTPRequest.If_Modified_Since",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "If_None_Match",
        "id": "HTTPRequest.If_None_Match",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "If_Range",
        "id": "HTTPRequest.If_Range",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "If_Unmodified_Since",
        "id": "HTTPRequest.If_Unmodified_Since",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Keep_Alive",
        "id": "HTTPRequest.Keep_Alive",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Max_Forwards",
        "id": "HTTPRequest.Max_Forwards",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Origin",
        "id": "HTTPRequest.Origin",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Permanent",
        "id": "HTTPRequest.Permanent",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Pragma",
        "id": "HTTPRequest.Pragma",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Proxy_Authorization",
        "id": "HTTPRequest.Proxy_Authorization",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Proxy_Connection",
        "id": "HTTPRequest.Proxy_Connection",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Range",
        "id": "HTTPRequest.Range",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Referer",
        "id": "HTTPRequest.Referer",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Save_Data",
        "id": "HTTPRequest.Save_Data",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "TE",
        "id": "HTTPRequest.TE",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Upgrade",
        "id": "HTTPRequest.Upgrade",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Upgrade_Insecure_Requests",
        "id": "HTTPRequest.Upgrade_Insecure_Requests",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "User_Agent",
        "id": "HTTPRequest.User_Agent",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Via",
        "id": "HTTPRequest.Via",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Warning",
        "id": "HTTPRequest.Warning",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_ATT_DeviceId",
        "id": "HTTPRequest.X_ATT_DeviceId",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Correlation_ID",
        "id": "HTTPRequest.X_Correlation_ID",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Csrf_Token",
        "id": "HTTPRequest.X_Csrf_Token",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Forwarded_For",
        "id": "HTTPRequest.X_Forwarded_For",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Forwarded_Host",
        "id": "HTTPRequest.X_Forwarded_Host",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Forwarded_Proto",
        "id": "HTTPRequest.X_Forwarded_Proto",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Http_Method_Override",
        "id": "HTTPRequest.X_Http_Method_Override",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Request_ID",
        "id": "HTTPRequest.X_Request_ID",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Requested_With",
        "id": "HTTPRequest.X_Requested_With",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_UIDH",
        "id": "HTTPRequest.X_UIDH",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "X_Wap_Profile",
        "id": "HTTPRequest.X_Wap_Profile",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      },
      {
        "name": "Unknown_Headers",
        "id": "HTTPRequest.Unknown_Headers",
        "type": "other",
        "mutateEnabled": true,
        "config": {
          "user_define": ""
        }
      }
    ]
  },
  "mutateModelId": "CoAP.ver"
}

const res = getTreeName([source.mutateModelConfig], 'test1')
console.log(res);