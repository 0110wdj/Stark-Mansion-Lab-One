const testArr = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35]
const target = 6

const binarySearch = (arr: number[], tar: number) => {
  let left = 0;
  let right = arr.length - 1
  while (left <= right) {
    const midIndex = Math.floor(left + (right - left) / 2)
    if (arr[midIndex] === tar) {
      return midIndex
    }

    if (arr[midIndex] > tar) {
      right = midIndex
    } else {
      left = midIndex + 1
    }
  }
  return -1
}

testArr.forEach(num => {
  console.log(binarySearch(testArr, num));
})
