function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  } else {
    let left = quickSort(arr.filter(i => i < arr[0]))
    let right = quickSort(arr.filter((i, index) => ((i >= arr[0]) && (index !== 0))))
    return [...left, arr[0], ...right]
  }
}

console.log(quickSort([8, 4, 2, 12, 54, 0, 1, 4]));
