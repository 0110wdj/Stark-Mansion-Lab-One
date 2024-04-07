function twoSum(price: number[], target: number): number[] {
  let i = 0, j = price.length - 1;
  while (i < j) {
    const curSum = price[i] + price[j]
    if (curSum === target) {
      return [price[i], price[j]]
    }
    if (curSum > target) {
      j--
    } else {
      i++
    }
  }
  return []
};

console.log(twoSum([3, 9, 12, 15], 18));
console.log(twoSum([8, 21, 27, 34, 52, 66], 61));
console.log(twoSum([8, 21, 27, 34, 52, 66], 99));
