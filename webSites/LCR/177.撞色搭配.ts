function sockCollocation(sockets: number[]): number[] {
  let x = 0;
  let y = 0;
  let n = 0;
  let m = 1;
  for (const num of sockets)            // 1. 遍历异或
    n ^= num;
  while ((n & m) === 0)               // 2. 循环左移，计算 m
    m <<= 1;
  for (const num of sockets) {           // 3. 遍历 sockets 分组
    if ((num & m) !== 0) x ^= num;  // 4. 当 num & m != 0
    else y ^= num;                // 4. 当 num & m == 0
  }
  return [x, y];          // 5. 返回出现一次的数字
};

console.log(sockCollocation([4, 5, 2, 4, 6, 6]));


// 整数数组 sockets 记录了一个袜子礼盒的颜色分布情况，
// 其中 sockets[i] 表示该袜子的颜色编号。
// 礼盒中除了一款撞色搭配的袜子，每种颜色的袜子均有两只。
// 请设计一个程序，在时间复杂度 O(n)，空间复杂度O(1) 内找到这双撞色搭配袜子的两个颜色编号。

// 示例 1：

// 输入：sockets = [4, 5, 2, 4, 6, 6]
// 输出：[2,5] 或 [5,2]
// 示例 2：

// 输入：sockets = [1, 2, 4, 1, 4, 3, 12, 3]
// 输出：[2,12] 或 [12,2]
