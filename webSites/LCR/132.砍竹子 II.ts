function cuttingBamboo(n: number): number {
  if (n === 2) return 1
  if (n === 3) return 2
  const last = n % 3
  const count_3 = (n - last) / 3

  console.log(count_3);

  switch (last) {
    case 0: {
      let res = 1
      for (let i = 1; i <= count_3; i++) {
        res = res * 3 % 1000000007
        console.log(res);
      }
      return res % 1000000007
    }
    case 1: {
      let res = 1
      for (let i = 1; i <= count_3 - 1; i++) {
        res = res * 3 % 1000000007
      }
      return res * 4 % 1000000007
    }
    case 2: {
      let res = 1
      for (let i = 1; i <= count_3; i++) {
        res = res * 3 % 1000000007
      }
      return res * 2 % 1000000007
    }
    default:
      break;
  }
  return Number.NaN
};

console.log(cuttingBamboo(120));
