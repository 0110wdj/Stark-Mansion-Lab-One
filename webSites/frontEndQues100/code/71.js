// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

/**
 * 构建 KMP 算法的 next 数组
 * @param {string} pattern 模式串
 * @returns {number[]} next 数组
 */
function buildNext(pattern) {
    const next = new Array(pattern.length).fill(0);
    let i = 1;
    let j = 0;
    
    while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
            next[i] = j + 1;
            i++;
            j++;
        } else if (j > 0) {
            j = next[j - 1];
        } else {
            next[i] = 0;
            i++;
        }
    }
    
    return next;
}

/**
 * KMP 字符串匹配算法
 * @param {string} text 主串
 * @param {string} pattern 模式串
 * @returns {number} 返回模式串在主串中的起始位置，如果不存在返回 -1
 */
function kmpSearch(text, pattern) {
    if (!pattern) return 0;
    if (!text || text.length < pattern.length) return -1;
    
    const next = buildNext(pattern);
    let i = 0;
    let j = 0;
    
    while (i < text.length && j < pattern.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        } else if (j > 0) {
            j = next[j - 1];
        } else {
            i++;
        }
    }
    
    return j === pattern.length ? i - j : -1;
}

// 测试代码
const text = "hello world";
const pattern = "world";
console.log(kmpSearch(text, pattern)); // 输出: 6