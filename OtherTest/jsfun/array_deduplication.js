const arr = [1, '1', 0, '0', 1, 0, '1', '0'];
// newArr内容：[1, '1', 0, '0']
console.log('newArr: ', Array.from(new Set(arr)));