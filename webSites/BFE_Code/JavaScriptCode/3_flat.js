const arr = [1, [2], [3, [4]]];

// 1. 使用 for 循环实现
function flatWithLoop(arr, depth = 1) {
  if (depth === 0) return arr;
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatWithLoop(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

// 2. 使用递归实现
function flatWithRecursion(arr, depth = 1) {
  if (depth === 0) return arr;
  return [].concat(
    ...arr.map(item => 
      Array.isArray(item) && depth > 0
        ? flatWithRecursion(item, depth - 1)
        : item
    )
  );
}

// 3. 使用栈实现
function flatWithStack(arr, depth = 1) {
  const stack = arr.map(item => ([item, depth]));
  const result = [];
  
  while (stack.length > 0) {
    const [item, currentDepth] = stack.pop();
    
    if (Array.isArray(item) && currentDepth > 0) {
      stack.push(...item.map(subItem => ([subItem, currentDepth - 1])));
    } else {
      result.unshift(item);
    }
  }
  
  return result;
}

// 原始的 reduce 实现
function flatWithReduce(arr, depth = 1) {
  if (depth === 0) return arr;
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flatWithReduce(item, depth - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

// 测试所有方法
console.log('使用循环:', flatWithLoop(arr, 2));
console.log('使用递归:', flatWithRecursion(arr, 2));
console.log('使用栈:', flatWithStack(arr, 2));
console.log('使用reduce:', flatWithReduce(arr, 2));