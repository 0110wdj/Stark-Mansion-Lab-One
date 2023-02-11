// lodash 实现 `_.get()`

/** 
 * 思路：1、path 转为数组；2、遍历 path 数组。
*/

const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}

function get(source, path, defaultValue = undefined) {

  // 如果 path 不是数组，需要切割为数组
  const segs = Array.isArray(path) ? path : path.split(/[\.\[\]]+/)
  
  // 如果末尾有反括号，则需要排除出去
  if (segs[segs.length - 1] === '') {
    segs.pop()
  }

  // 针对空的情况的补丁
  if(segs.length === 0){
    return defaultValue
  }

  while (source && segs.length > 0) {
    source = source[segs.shift()]
  }

  return source === undefined ? defaultValue : source
}

console.log(get(obj, 'a.b.c'));// [1,2,3]
console.log(get(obj, 'a.b.c.0')); // 1
console.log(get(obj, 'a.b.c[1]'));// 2
console.log(get(obj, ['a', 'b', 'c', '2'])); // 3
console.log(get(obj, 'a.b.c[3]')); // undefined
console.log(get(obj, 'a.c', 'bfe')) // 'bfe'
console.log(get(obj, ''));// 
console.log(get(obj, []));// 