## 4.1 practice

### 4.1-1 当 A 当所有元素均为负数时，FIND-MAXIMUM-SUBARRAY 返回什么？

按照正常步骤找最大子数组，即由最大的负数组成的单元素数组。如果有多个相同的最大负数，根据算法的返回顺序，取第一个。

### 4.1-2 对最大子数组问题，编写暴力求解方法对伪代码，其运行时间应该为 \(Θ(n^2)\)。

设计思路：两层循环遍历。

```
subArray = [0,0,0]
for i = 0 to A.length
  sum = 0
  for j = i to A.length
    sum += A[j]
    if sum > subArray[2]
      subArray = (i,j,sum)
```

### 4.1.3 在你的计算机上实现最大子数组问题的暴力算法和递归算法。请指出多大的问题规模\(n_0\)是性能交叉点——从此之后递归算法将击败暴力算法？然后，修改递归算法的基本情况——当问题规模小于\(n_0\)时采用暴力算法。修改后，性能交叉点会改变吗？

程序：

```js
const testArr = [
  13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
];
// resultArr = [18, 20, -7, 12] , result = [7,10,43]

const bruteForceAlgorithm = (testArr: number[]) => {
  let subArray = [0, 0, 0];
  for (let i = 0; i < testArr.length; i++) {
    let sum = 0;
    for (let j = i; j < testArr.length; j++) {
      sum += testArr[j];
      if (sum > subArray[2]) {
        subArray = [i, j, sum];
      }
    }
  }
  return subArray;
};

const recursiveAlgorithm = (testArr: number[]) => {
  const findMaxCorssingSubarray = (
    subLeftLeftIndex: number,
    subLeftRightIndex: number,
    subRightLeftIndex: number,
    subRightRightIndex: number,
    testArr: number[]
  ): [number, number, number] => {
    let leftMaxSubArray = [subLeftRightIndex, testArr[subLeftRightIndex]];
    let rightMaxSubArray = [subRightLeftIndex, testArr[subRightLeftIndex]];

    let sum = leftMaxSubArray[1];
    for (let i = subLeftRightIndex - 1; i >= subLeftLeftIndex; i--) {
      sum += testArr[i];
      if (sum > leftMaxSubArray[1]) {
        leftMaxSubArray = [i, sum];
      }
    }

    sum = rightMaxSubArray[1];
    for (let i = subRightLeftIndex + 1; i <= subRightRightIndex; i++) {
      sum += testArr[i];
      if (sum > rightMaxSubArray[1]) {
        rightMaxSubArray = [i, sum];
      }
    }

    return [
      leftMaxSubArray[0],
      rightMaxSubArray[0],
      leftMaxSubArray[1] + rightMaxSubArray[1],
    ];
  };

  const findMaximumSubarray = (
    leftIndex: number,
    rightIndex: number,
    testArr: number[]
  ): [number, number, number] => {
    // 终止条件
    if (rightIndex === leftIndex) {
      return [leftIndex, rightIndex, testArr[leftIndex]];
    }

    // 分解问题
    const subLeftLeftIndex = leftIndex;
    const subLeftRightIndex = Math.floor((leftIndex + rightIndex) / 2);
    const subRightLeftIndex = Math.floor((leftIndex + rightIndex) / 2) + 1;
    const subRightRightIndex = rightIndex;

    // 二分后多出一个副作用需要处理：跨中点子数组
    const leftMaxSubarray = findMaximumSubarray(
      subLeftLeftIndex,
      subLeftRightIndex,
      testArr
    );
    const rightMaxSubarray = findMaximumSubarray(
      subRightLeftIndex,
      subRightRightIndex,
      testArr
    );
    const crossMaxSubarray = findMaxCorssingSubarray(
      subLeftLeftIndex,
      subLeftRightIndex,
      subRightLeftIndex,
      subRightRightIndex,
      testArr
    );

    // 三种情况比较一下就是最终结果了
    if (
      leftMaxSubarray[2] >= rightMaxSubarray[2] &&
      leftMaxSubarray[2] >= crossMaxSubarray[2]
    ) {
      return leftMaxSubarray;
    } else if (
      rightMaxSubarray[2] >= leftMaxSubarray[2] &&
      rightMaxSubarray[2] >= crossMaxSubarray[2]
    ) {
      return rightMaxSubarray;
    } else {
      return crossMaxSubarray;
    }
  };

  return findMaximumSubarray(0, testArr.length - 1, testArr);
};

console.log({ bruteForceAlgorithm: bruteForceAlgorithm(testArr) });
console.log({ recursiveAlgorithm: recursiveAlgorithm(testArr) });
```

通过时间复杂度数值比较，性能交叉点在\(n_0=2\)时。

修改后的算法：

```js
// 终止条件
// if (rightIndex === leftIndex) {
//   return [leftIndex, rightIndex, testArr[leftIndex]];
// }
// 修改终止条件，对小于一定规模的问题，改变算法
if (rightIndex === leftIndex + 1) {
  const base = leftIndex;
  const res = bruteForceAlgorithm([...testArr].splice(leftIndex, 2));
  return [res[0] + base, res[1] + base, res[2]];
}
```

从熟知上比较，修改后性能交叉点不改变。

### 4.1.4 假定修改最大子数组问题的定义，允许结果为空子数组，其和为 0。你应该如何修改现有算法，使它们能允许空子数组为最终结果。

不用修改，增加入参判断和结果处理即可。

**入参判断**：如果传入空数组，直接返回空子数组结果。

**结果处理**：如果结果为负数，则返回空子数组结果。

### 4.1.5 使用如下思想为最大子数组问题设计一个非递归的、线性时间的算法。从数组的左边界开始，由左至右处理，记录到目前为止已经处理过的最大子数组。若已知 \(A[1..j]\) 的最大子数组，基于如下性质将解扩展为 \(A[1..j+1]\) 的最大子数组: \(A[1..j+1]\) 的最大子数组要么是 \(A[1..j]\) 的最大子数组，要么是某个子数组 \(A[i..j+1](1 \leq i \leq j+1)\)。在已知 \(A[1..j]\)的最大子数组的情况下，可以在线性时间内找出形如\(A[i..j+1]\)的最大子数组。

```ts
const testArr = [
  13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
];
// resultArr = [18, 20, -7, 12] , result = [7,10,43]

const findMaximumSubarray = (array: number[]) => {
  let maxSub = [0, 0, array[0]];
  let rightSub = [0, 0, array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > 0) {
      if (rightSub[2] < 0) {
        rightSub = [i, i, array[i]];
      } else {
        rightSub = [rightSub[0], i, rightSub[2] + array[i]];
      }
      if (maxSub[1] === i - 1) {
        maxSub = [maxSub[0], maxSub[1] + 1, maxSub[2] + array[i]];
      } else {
        if (rightSub[2] > maxSub[2]) {
          maxSub = [...rightSub];
        }
      }
    } else {
      rightSub = [rightSub[0], rightSub[1] + 1, rightSub[2] + array[i]];
    }
  }
  return maxSub;
};

console.log(findMaximumSubarray(testArr));
```
