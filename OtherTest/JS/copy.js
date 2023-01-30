function deepClone(obj) {
  /** 如果是null或者undefined我就不进行拷贝操作 */
  if (obj == null) return obj;
  /** 对于时间和正则，返回新实例 */
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  /** 如果不是对象，直接返回 */
  if (typeof obj !== "object") return obj;

  /** 如果是对象，则先复制当前对象引用本身 */
  let cloneObj = new obj.constructor();
  /** 再遍历对象的内部 */
  for (let key in obj) {
    cloneObj[key] = deepClone(obj[key]);
  }
  return cloneObj;
}

const obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3],
  d: undefined,
};

console.log(deepClone(obj1)); 