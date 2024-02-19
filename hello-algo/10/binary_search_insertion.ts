const testArrInsertion = [1, 3, 6, 6, 6, 6, 6, 10, 12, 15]
const targetInsertion = 6

const binarySearchInsertion = (arr: number[], tar: number) => {
  let left = 0;
  let right = arr.length - 1
  while (left <= right) {
    const midIndex = Math.floor(left + (right - left) / 2)

    if (arr[midIndex] < tar) {
      left = midIndex + 1
    } else {
      right = midIndex - 1
    }

  }
  return [left, right]
}

testArrInsertion.forEach(num => {
  console.log(binarySearchInsertion(testArrInsertion, num + 0.5));
})