function countTarget(scores: number[], target: number): number {
  if (scores.length === 0) return 0;
  if (target < scores[0] || target > (scores.at(-1) || -Infinity)) return 0;
  let count = 0, i = 0, j = scores.length - 1;
  while (i < j) {
    var mid = i + Math.floor((j - i) / 2)
    if (scores[mid] > target - 0.5) {
      j = mid
    } else {
      i = mid + 1
    }
  }
  console.log({ i, j });

  while (true) {
    if (scores[i] !== target) {
      break
    }
    i++;
    count++;
  }
  return count
};


console.log(countTarget([2, 2, 3, 4, 4, 4, 5, 6, 6, 8], 4));
console.log(countTarget([1, 2, 3, 5, 7, 9], 6));
console.log(countTarget([], 6));
console.log(countTarget([1, 2, 3], 2));
