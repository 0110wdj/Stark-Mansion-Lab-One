// 1 二叉树层序遍历
// 2 实现一个事件发射器
// 3 实现防抖函数
// 4 大数相加

// 大数相加（字符串形式）
function addBigNumber(a, b) {
  // 保证 a 是较短的那个
  if (a.length > b.length) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  let carry = 0;
  let result = [];

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? a.charCodeAt(i) - 48 : 0;
    const y = j >= 0 ? b.charCodeAt(j) - 48 : 0;

    const sum = x + y + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result.reverse().join('');
}