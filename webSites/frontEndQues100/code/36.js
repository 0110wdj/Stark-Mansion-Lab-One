// 示例：一个包含嵌套数组的数据结构
const inputArr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

/**
 * 数组扁平化函数
 * 将多维数组转换为一维数组
 * @param {Array} inputArray - 需要扁平化的数组
 * @returns {Array} - 扁平化后的一维数组
 */
const flatten = inputArray => {
    let result = [...inputArray]
    // 当数组中还存在数组元素时继续循环
    while (result.some(item => Array.isArray(item))) {
        // 使用 concat 和扩展运算符来展开一层数组
        result = [].concat(...result)
    }
    return result
}

// 测试并打印结果
console.log(flatten(inputArr))