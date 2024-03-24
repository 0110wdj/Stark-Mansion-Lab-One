/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */



// @lc code=start
function myPow(x: number, n: number): number {
  const map = new Map()
  const myPowInner = (x: number, n: number): number => {
    if (x === 0) return 0
    switch (n) {
      case 0:
        return 1
      case 1:
        return x
      case 2:
        return x * x
      case -1:
        return 1 / x
      case -2:
        return 1 / (x * x)
      default:
        break;
    }
    const sub = Math.floor(n / 2)
    let left = 0, right = 0;
    if (map.has(`${x}->${sub}`)) {
      left = map.get(`${x}->${sub}`)
    } else {
      left = myPowInner(x, sub)
      map.set(`${x}->${sub}`, left)
    }
    if (map.has(`${x}->${n - sub}`)) {
      right = map.get(`${x}->${n - sub}`)
    } else {
      right = myPowInner(x, n - sub)
      map.set(`${x}->${n - sub}`, right)
    }
    const res = left * right
    // console.log({ x, n, res });
    map.set(`${x}->${n}`, res)
    return res
  }
  return myPowInner(x, n)
};
// @lc code=end

// console.log(myPow(0.44528, 0));
console.log(myPow(0.00001, 2147483647));
