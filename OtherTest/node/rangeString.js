function formatRangeArray(rangeArray) {
  const result = rangeArray.map(([start, end]) => {
    if (start === end) {
      // 如果开始和结束数字相同，返回单个数字
      return start.toString();
    }
    // 否则返回范围表示 'start-end'
    return `${start}-${end}`;
  });

  return result.join(',');
}

function parseRangeString(rangeStr) {
  // 首先去除所有空格
  const cleanStr = rangeStr.replace(/\s/g, '');
  
  // 用正则表达式匹配范围和单独数字
  const regex = /^(\d+(?:-\d+)?(?:,\d+(?:-\d+)?)*)?$/;
  
  // 首先验证整个字符串格式是否正确
  if (!regex.test(cleanStr)) {
    return null;
  }

  // 如果是空字符串，返回空数组
  if (!cleanStr) {
    return [];
  }

  // 分割并解析每个部分
  const result = cleanStr.split(',').map(part => {
    const rangeParts = part.split('-');
    if (rangeParts.length === 1) {
      const num = Number.parseInt(rangeParts[0], 10);
      if (num <= 0) return null;
      return [num, num];
    }
    const start = Number.parseInt(rangeParts[0], 10);
    const end = Number.parseInt(rangeParts[1], 10);
    if (start <= 0 || end <= 0 || start > end) return null;
    return [start, end];
  });

  // 如果任何部分解析失败，返回 null
  if (result.includes(null)) {
    return null;
  }

  return result;
}

// 示例用法
console.log(formatRangeArray([[1, 3], [5, 5], [7, 9]])); // 输出: "1-3,5,7-9"
console.log('测试用例 1:', parseRangeString("1-3,5,7-9")); // 应该输出: [[1,3], [5,5], [7,9]]
console.log('测试用例 2:', parseRangeString("1")); // 应该输出: [[1,1]]
console.log('测试用例 3:', parseRangeString("")); // 应该输出: []
console.log('测试用例 4:', parseRangeString("1-3,5,7-9,10-12")); // 应该输出: [[1,3], [5,5], [7,9], [10,12]]
console.log('测试用例 5:', parseRangeString("invalid")); // 应该输出: null
console.log('测试用例 6:', parseRangeString("1-3,5,0-9")); // 应该输出: null (因为包含 0)
console.log('测试用例 7:', parseRangeString("3-1")); // 应该输出: null (因为起始值大于结束值)
