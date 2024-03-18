// 用于对比两个字符串是否相似，相似返回 true ，不相似返回 false，达到如下代码的执行结果：字符串包含的字符种类以及每种字符的个数均相等即为相似。

const isSimilar = function (str) {
  if (str.length !== this.length) return false
  const map = new Map()
  for (const c of this) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (const c of str) {
    if (!map.get(c)) return false
    map.set(c, map.get(c) - 1)
  }
  return true
}

String.prototype.isSimilar = isSimilar;

const str1 = 'ababc';
const str2 = 'babac';
const str3 = 'abccc';
const str4 = 'abcccw';

// const str5 = 'cab c';
const str5 = 'babcc';
const str6 = 'abccc';

console.log(str1.isSimilar(str2));  // 输出 true
console.log(str2.isSimilar(str1));  // 输出 true
console.log(str1.isSimilar(str3));  // 输出 false
console.log(str1.isSimilar(str4));  // 输出 false
console.log(str5.isSimilar(str6));  // 输出 false