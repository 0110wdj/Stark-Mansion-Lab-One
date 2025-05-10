// 打印出 1 - 10000 之间的所有对称数，例如：121、1331 等

function findPalindromeNumbers() {
    const result = [];
    
    // 处理1位数
    for (let i = 1; i <= 9; i++) {
        result.push(i);
    }
    
    // 处理2位数
    for (let i = 1; i <= 9; i++) {
        result.push(i * 10 + i);
    }
    
    // 处理3位数
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            result.push(i * 100 + j * 10 + i);
        }
    }
    
    // 处理4位数
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            result.push(i * 1000 + j * 100 + j * 10 + i);
        }
    }
    
    // 排序并过滤掉大于10000的数
    return result.filter(num => num <= 10000).sort((a, b) => a - b);
}

// 获取并打印结果
const palindromeNumbers = findPalindromeNumbers();
console.log('1-10000之间的对称数：');
console.log(palindromeNumbers);

// 思路相同，另一种写法
// function getPalindromeNumber() {
//   let res = []
//   for(let i = 1; i < 10; i++) {
//     res.push(i)
//     res.push(11 * i)
//     for(let j = 0; j < 10; j++) {
//       res.push(i * 101 + j * 10)
//       res.push(i * 1001 + j * 110)
//     }
//   }
//   return res
// }

// console.log(getPalindromeNumber())