/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-03-21 16:36:36
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-03-21 17:23:35
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\kits\kit.js
 * @Description: Do not edit
 */
// const fs = require('fs')

// const str1 = fs.readFileSync('1.txt', 'utf-8');
// const str2 = fs.readFileSync('2.txt', 'utf-8');
// const str3 = fs.readFileSync('3.txt', 'utf-8');

// const arrary1 = str1.split('\r\n');
// const arrary2 = str2.split('\r\n');
// const arrary3 = str3.split('\r\n');

// let htmlStr = ''
// for (let i = 0; i < arrary1.length; i++) {
//   htmlStr += `<tr>
//   <th scope="row">${arrary1[i]}</th>
//   <td>${arrary2[i]}</td>
//   <td class="d-none d-md-block d-xl-block">${arrary3[i]}</td>
// </tr>`
// }

// fs.writeFileSync('./res.html', htmlStr)


const fs = require('fs')

const str1 = fs.readFileSync('1.txt', 'utf-8');
const str2 = fs.readFileSync('2.txt', 'utf-8');
const str3 = fs.readFileSync('3.txt', 'utf-8');
const str4 = fs.readFileSync('4.txt', 'utf-8');

const arrary1 = str1.split('\r\n');
const arrary2 = str2.split('\r\n');
const arrary3 = str3.split('\r\n');
const arrary4 = str4.split('\r\n');

let htmlStr = ''
for (let i = 0; i < arrary1.length; i++) {
  htmlStr += `<tr>
<th scope="row">${arrary1[i]}</th>
<td>${arrary2[i]}</td>
<td>${arrary3[i]}</td>
<td class="d-none d-md-block d-xl-block">${arrary4[i]}</td>
</tr>`
}

fs.writeFileSync('./res.html', htmlStr)