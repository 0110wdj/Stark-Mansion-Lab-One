(() => {
  /* 零钱兑换：贪心 */
  function coinChangeGreedy(coins: number[], amt: number): number {
    // 假设 coins 数组有序
    let i = coins.length - 1;
    let count = 0;
    // 循环进行贪心选择，直到无剩余金额
    while (amt > 0) {
      // 找到小于且最接近剩余金额的硬币
      while (i > 0 && coins[i] > amt) {
        i--;
      }
      // 选择 coins[i]
      amt -= coins[i];
      count++;
    }
    // 若未找到可行方案，则返回 -1
    return amt === 0 ? count : -1;
  }
  const res = coinChangeGreedy([1, 5, 10, 20, 50, 100], 131)
  console.log(res);
})()