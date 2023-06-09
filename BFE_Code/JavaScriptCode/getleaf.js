/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-06-05 21:13:59
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-06-05 21:18:25
 * @FilePath: \Stark-Mansion-Lab-One\BFE_Code\JavaScriptCode\getleaf.js
 * @Description: Do not edit
 */

let obj = {
  "id": "INET",
  "name": "网络协议",
  "order": 1,
  "children": [
    {
      "id": "WEB",
      "name": "Web",
      "order": 101,
      "children": [
        {
          "id": "websocket",
          "name": "WebSocket",
          "order": null,
          "children": null
        },
        {
          "id": "http",
          "name": "HTTP",
          "order": null,
          "children": null
        },
        {
          "id": "quic",
          "name": "QUIC",
          "order": null,
          "children": null
        },
        {
          "id": "tls",
          "name": "TLS",
          "order": null,
          "children": null
        },
        {
          "id": "https",
          "name": "HTTPS",
          "order": null,
          "children": null
        }
      ]
    },
    {
      "id": "SEC",
      "name": "Secure",
      "order": 102,
      "children": [
        {
          "id": "tls",
          "name": "TLS",
          "order": null,
          "children": null
        },
        {
          "id": "socks",
          "name": "SOCKS",
          "order": null,
          "children": null
        },
        {
          "id": "dtls",
          "name": "DTLS",
          "order": null,
          "children": null
        },
        {
          "id": "ssh",
          "name": "SSH",
          "order": null,
          "children": null
        }
      ]
    },
    {
      "id": "ROUTING",
      "name": "Routing",
      "order": 103,
      "children": [
        {
          "id": "ripng",
          "name": "RIPng",
          "order": null,
          "children": null
        },
        {
          "id": "bgp",
          "name": "BGP",
          "order": null,
          "children": null
        },
        {
          "id": "isis",
          "name": "ISIS",
          "order": null,
          "children": null
        },
        {
          "id": "rip",
          "name": "RIP",
          "order": null,
          "children": null
        },
        {
          "id": "ospf",
          "name": "OSPF",
          "order": null,
          "children": null
        }
      ]
    },
    {
      "id": "BYLAYERS",
      "name": "分层",
      "order": 190,
      "children": [
        {
          "id": "DATALINK",
          "name": "数据链路层",
          "order": 19001,
          "children": [
            {
              "id": "ethernet",
              "name": "Ethernet",
              "order": null,
              "children": null
            }
          ]
        },
        {
          "id": "INTERNET",
          "name": "网络层",
          "order": 19002,
          "children": [
            {
              "id": "ip",
              "name": "IP",
              "order": null,
              "children": null
            },
            {
              "id": "arp",
              "name": "ARP",
              "order": null,
              "children": null
            },
            {
              "id": "icmp",
              "name": "ICMP",
              "order": null,
              "children": null
            },
            {
              "id": "igmp",
              "name": "IGMP",
              "order": null,
              "children": null
            },
            {
              "id": "ospf",
              "name": "OSPF",
              "order": null,
              "children": null
            }
          ]
        },
        {
          "id": "TRANSPORT",
          "name": "传输层",
          "order": 19003,
          "children": [
            {
              "id": "rtcp",
              "name": "RTCP",
              "order": null,
              "children": null
            },
            {
              "id": "tcp",
              "name": "TCP",
              "order": null,
              "children": null
            },
            {
              "id": "quic",
              "name": "QUIC",
              "order": null,
              "children": null
            },
            {
              "id": "udp",
              "name": "UDP",
              "order": null,
              "children": null
            },
            {
              "id": "tls",
              "name": "TLS",
              "order": null,
              "children": null
            },
            {
              "id": "rtp",
              "name": "RTP",
              "order": null,
              "children": null
            },
            {
              "id": "dtls",
              "name": "DTLS",
              "order": null,
              "children": null
            },
            {
              "id": "ssh",
              "name": "SSH",
              "order": null,
              "children": null
            }
          ]
        },
        {
          "id": " TRANSPORT",
          "name": "传输层",
          "order": 19003,
          "children": [
            {
              "id": "socks",
              "name": "SOCKS",
              "order": null,
              "children": null
            }
          ]
        },
        {
          "id": "APPLICATION",
          "name": "应用层",
          "order": 19004,
          "children": [
            {
              "id": "ripng",
              "name": "RIPng",
              "order": null,
              "children": null
            },
            {
              "id": "websocket",
              "name": "WebSocket",
              "order": null,
              "children": null
            },
            {
              "id": "http",
              "name": "HTTP",
              "order": null,
              "children": null
            },
            {
              "id": "snmp",
              "name": "SNMP",
              "order": null,
              "children": null
            },
            {
              "id": "rtsp",
              "name": "RTSP",
              "order": null,
              "children": null
            },
            {
              "id": "ftp",
              "name": "FTP",
              "order": null,
              "children": null
            },
            {
              "id": "bgp",
              "name": "BGP",
              "order": null,
              "children": null
            },
            {
              "id": "telnet",
              "name": "TELNET",
              "order": null,
              "children": null
            },
            {
              "id": "cifs",
              "name": "CIFS",
              "order": null,
              "children": null
            },
            {
              "id": "dhcp",
              "name": "DHCP",
              "order": null,
              "children": null
            },
            {
              "id": "ldap",
              "name": "LDAP",
              "order": null,
              "children": null
            },
            {
              "id": "soap",
              "name": "SOAP",
              "order": null,
              "children": null
            },
            {
              "id": "smtp",
              "name": "SMTP",
              "order": null,
              "children": null
            },
            {
              "id": "pop",
              "name": "POP",
              "order": null,
              "children": null
            },
            {
              "id": "dns",
              "name": "DNS",
              "order": null,
              "children": null
            },
            {
              "id": "smb",
              "name": "SMB",
              "order": null,
              "children": null
            },
            {
              "id": "https",
              "name": "HTTPS",
              "order": null,
              "children": null
            },
            {
              "id": "rip",
              "name": "RIP",
              "order": null,
              "children": null
            },
            {
              "id": "upnp",
              "name": "UPnP",
              "order": null,
              "children": null
            },
            {
              "id": "nfs",
              "name": "NFS",
              "order": null,
              "children": null
            },
            {
              "id": "sip",
              "name": "SIP",
              "order": null,
              "children": null
            }
          ]
        }
      ]
    }
  ]
}

const getleafObj = (item, res) => {
  if (!item) {
    return res;
  }

  res[item.id] = item.name;

  if (item?.children && item.children.length > 0) {
    item.children.forEach((element) => {
      getleafObj(element, res);
    });
  }

  return res;
};

let res = {}
console.log(getleafObj(obj, res));