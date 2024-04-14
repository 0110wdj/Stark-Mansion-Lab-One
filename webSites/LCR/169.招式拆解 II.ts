function dismantlingAction(arr: string): string {
  if (arr.length === 0) return ' ';
  if (arr.length === 1) return arr;
  const map = new Map();
  const resTmp = new Map();
  for (let i = 0; i < arr.length; i++) {
    const c = arr.charAt(i)
    const count = map.get(c) ?? 0
    map.set(c, count + 1)
    if (count === 0) {
      resTmp.set(c, i)
    } else {
      resTmp.delete(c)
    }
  }
  let res = ' ';
  let resMin = Infinity
  if (resTmp.size === 0) {
    return ' '
  }
  for (const [key, val] of resTmp) {
    if (val < resMin) {
      resMin = val;
      res = key
    }
  }
  return res
};

console.log(dismantlingAction("abbccdeff"));
console.log(dismantlingAction("ccdd"));
console.log(dismantlingAction("ccddr"));
console.log(dismantlingAction("loveleetcode"));
