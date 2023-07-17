/*
 * @Author: LiuJie 626796235@qq.com
 * @Date: 2023-07-15 15:50:54
 * @LastEditors: LiuJie 626796235@qq.com
 * @LastEditTime: 2023-07-15 15:57:04
 * @FilePath: \Stark-Mansion-Lab-One\OtherTest\ES6\weiteToArr.js
 * @Description: Do not edit
 */
function writeToArr(arr, index, value) {
  if (index >= arr.length) {
    const dif = index - arr.length + 1
    for (let i = 0; i < dif; i++) {
      arr.push(null)
    }
  }
  arr[index] = value;
}

const arr = []
writeToArr(arr, 3, 4)
writeToArr(arr, 0, 4)
writeToArr(arr, 5, 7)
writeToArr(arr, 5, 8)
console.log(arr);