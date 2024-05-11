function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  const state = [0, 1, 1];
  let i = 3;
  for (; i <= n; i++) {
    state[i % 3] = (state[(i - 1) % 3] + state[(i - 2) % 3]) % 1000000007
  }
  return state[n % 3]
};

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
console.log(fib(81));

