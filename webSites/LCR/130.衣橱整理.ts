function getSum(num: number): number {
  if (num < 10) {
    return num
  } else {
    const d = num % 10;
    const f = Math.floor(num / 100);
    const m = Math.floor((num - f) / 10);
    return d + m + f
  }
}

const sums = (x: number): number => {
  let s = 0;
  while (x !== 0) {
    s += x % 10;
    x = Math.floor(x / 10)
  }
  return s
}

function wardrobeFinishing(m: number, n: number, cnt: number): number {
  let visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
  const dfs = (i: number, j: number): number => {
    if (i >= m || j >= n || (sums(i) + sums(j) > cnt) || visited[i][j]) {
      return 0
    }
    visited[i][j] = true;
    return 1 + dfs(i + 1, j) + dfs(i, j + 1);
  }
  return dfs(0, 0);
};

// console.log(wardrobeFinishing(4, 7, 5));
console.log(wardrobeFinishing(38, 15, 9));
