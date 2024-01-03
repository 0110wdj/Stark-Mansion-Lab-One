function mergeSort(arr) {
  if (arr.length <= 1) {
    return [arr, 0];
  }

  const mid = Math.floor(arr.length / 2);
  const [left, leftInv] = mergeSort(arr.slice(0, mid));
  const [right, rightInv] = mergeSort(arr.slice(mid));
  const [merged, mergeInv] = merge(left, right);

  const totalInv = leftInv + rightInv + mergeInv;
  return [merged, totalInv];
}

function merge(left, right) {
  let merged = [];
  let inversions = 0;
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
      // If element from the right is smaller, it forms inversions
      inversions += left.length - i;
    }
  }

  merged = merged.concat(left.slice(i)).concat(right.slice(j));

  return [merged, inversions];
}

function countInversions(arr) {
  const [, invCount] = mergeSort(arr);
  return invCount;
}

// 测试数据
const testData = [7, 5, 3, 1, 2, 4, 6]; // 12个逆序对
const inversionCount = countInversions(testData);
console.log("给定数组中的逆序对数量为:", inversionCount);
