// _.chunk() 可以用来按一定长度分割数组。

/** 
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(items, size) {
  if (size <= 0) {
    return []
  }
  const arr = [];
  for (let i = 0; i < items.length; i += size) {
    arr.push(items.slice(i, i + size))
  }
  return arr
}

chunk([1, 2, 3, 4, 5], 1)
// [[1], [2], [3], [4], [5]]

chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4, 5], 3)
// [[1, 2, 3], [4, 5]]

chunk([1, 2, 3, 4, 5], 4)
// [[1, 2, 3, 4], [5]]

chunk([1, 2, 3, 4, 5], 5)
// [[1, 2, 3, 4, 5]]