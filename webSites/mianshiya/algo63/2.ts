// 获取数字中 2 的因子个数
function getFactor(num: number) {
  let count = 0;
  while (num % 2 === 0) {
    count++;
    num = num / 2;
  }
  return count;
}

function solve(arr: Array<number>, k: number) {
  const len = arr.length;

  const factorArr: number[] = [];
  arr.forEach((num, i) => {
    factorArr[i] = getFactor(num);
  });

  let min_length = Infinity;
  let current_sum = 0;
  let left = 0, right = 0;

  while (right < len) {
    current_sum += factorArr[right];
    right++;

    while (current_sum >= k) {
      min_length = Math.min(min_length, right - left);
      current_sum -= factorArr[left];
      left++;
    }
  }

  return min_length === Infinity ? -1 : min_length;
}