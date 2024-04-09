// 同 leetcode 239

function maxAltitude(heights: number[], limit: number): number[] {
  if (heights.length === 0) {
    return []
  }
  function minStackPush(min_stack: number[], tar: number) {
    if (min_stack.length === 0) {
      min_stack.push(tar)
    } else {
      // console.log({ tar, min_stack });
      if (tar > (min_stack.at(-1) ?? -Infinity)) {
        while (min_stack.length > 0 && tar > (min_stack.at(-1) ?? -Infinity)) {
          min_stack.pop()
        }
      }
      min_stack.push(tar)
    }
    // console.log({ af: min_stack });
  }
  const res: number[] = []
  const min_stack: number[] = []
  let i = 0, j = 0;
  while (j < limit) {
    minStackPush(min_stack, heights[j])
    j++
  }
  res.push(min_stack[0])
  while (j < heights.length) {
    // console.log({ lef: heights[i] });
    if (heights[i] === min_stack[0]) {
      min_stack.shift()
    }
    minStackPush(min_stack, heights[j])
    res.push(min_stack[0])
    i++;
    j++;
  }
  return res
};

console.log(maxAltitude([14, 2, 27, -5, 28, 13, 39], 3));
console.log(maxAltitude([], 0));
console.log(maxAltitude([1, -1], 1));
console.log(maxAltitude([1, 3, 1, 2, 0, 5], 3));
