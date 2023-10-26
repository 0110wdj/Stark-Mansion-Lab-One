// const LENGTH = 6; // 多米诺骨牌的数量

// const dominos = [
//   { left: 8, right: 5 },
//   { left: 4, right: 2 },
//   { left: 6, right: 9 },
//   { left: 7, right: 7 },
//   { left: 3, right: 9 },
//   { left: 11, right: 10 },
// ];

// const calculateMax = () => {
//   let leftSum = 0;
//   let rightSum = 0;

//   for (let i = 0; i < LENGTH; i++) {
//     const { left, right } = dominos[i];
//     const leftRight = left * right;
//     const leftLeft = left * leftSum;
//     const rightRight = right * rightSum;
//     const rightLeft = right * leftSum;

//     const newLeftSum = Math.max(leftRight + leftLeft, left * rightSum + leftSum);
//     const newRightSum = Math.max(rightRight + rightSum, right * leftSum + rightSum);

//     const swapLeft = leftRight + leftLeft > left * rightSum + leftSum;
//     const swapRight = rightRight + rightSum > right * leftSum + rightSum;

//     dominos[i].status = [swapLeft ? 0 : 1, swapRight ? 0 : 1];

//     leftSum = newLeftSum; // 更新左侧总和
//     rightSum = newRightSum; // 更新右侧总和
//   }

//   return { left: leftSum, right: rightSum };
// };

// const maxValues = calculateMax();
// const statusKey = maxValues.left > maxValues.right ? 0 : 1;

// console.log(`sum.left ${maxValues.left}`);
// console.log(`sum.right ${maxValues.right}`);
// console.log(`多米诺骨牌状态 (${statusKey}): ${dominos.map((domino) => domino.status[statusKey]).join(" ")}`);
