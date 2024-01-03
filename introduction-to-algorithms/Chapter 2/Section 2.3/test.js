function countInversions(arr) {
  // 归并排序
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return [arr, 0];
    }

    const mid = Math.floor(arr.length / 2);
    const [left, leftInv] = mergeSort(arr.slice(0, mid)); // 对左半部分进行归并排序
    const [right, rightInv] = mergeSort(arr.slice(mid)); // 对右半部分进行归并排序
    const [merged, mergeInv] = merge(left, right); // 合并左右两部分并计算逆序对数量

    const totalInv = leftInv + rightInv + mergeInv; // 计算总的逆序对数量
    return [merged, totalInv];
  }

  // 合并并计算逆序对数量
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
        // 如果右边的元素小于左边的元素，则形成逆序对
        inversions += left.length - i;
      }
    }

    merged = merged.concat(left.slice(i)).concat(right.slice(j)); // 处理剩余的元素

    return [merged, inversions];
  }

  // 使用归并排序计算逆序对数量
  const [, invCount] = mergeSort(arr);
  return invCount;
}

// 测试数据
const testData = [7, 5, 3, 1, 2, 4, 6]; // 12个逆序对
const inversionCount = countInversions(testData);
console.log("给定数组中的逆序对数量为:", inversionCount);
