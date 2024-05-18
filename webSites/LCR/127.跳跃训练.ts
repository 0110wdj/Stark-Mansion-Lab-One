function trainWays(n: number): number {
  if (n === 0) return 1
  const state = [1, 2, 3];
  let i = 2;
  for (; i <= n; i++) {
    state[i % 3] = (state[(i - 1) % 3] % 1000000007 + state[(i - 2) % 3] % 1000000007) % 1000000007
  }
  return state[(n - 1) % 3]
};