const insertionSort = (arr, sort = true) => {
  for (let j = 1; j < arr.length; j++) {
    const key = arr[j];
    let i = j - 1
    while (i >= 0 && (sort ? arr[i] > key : arr[i] < key)) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = key
  }
  return arr
}

const arr = [5, 2, 4, 6, 1, 3]

console.log(insertionSort(arr));
console.log(insertionSort(arr, false));