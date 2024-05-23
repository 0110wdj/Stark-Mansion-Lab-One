function iceBreakingGame(num: number, target: number): number {
  let x = 0;
  for (let i = 2; i <= num; i++) {
    x = (x + target) % i;
  }
  return x;
};

console.log(new Date());
console.log(1, iceBreakingGame(7, 4));
// console.log(iceBreakingGame(1200, 116922));
// console.log(0, iceBreakingGame(70866, 116922));
console.log(new Date());
