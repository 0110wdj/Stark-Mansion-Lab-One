// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

const arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];

function groupConsecutiveNumbers(arr) {
    const map = new Map();
    const result = [];
    
    // 第一次遍历：记录每个数字的连续关系
    for (const num of arr) {
        if (!map.has(num)) {
            map.set(num, {
                value: num,
                prev: map.get(num - 1),
                next: map.get(num + 1)
            });
            
            // 更新相邻节点的关系
            if (map.has(num - 1)) {
                map.get(num - 1).next = map.get(num);
            }
            if (map.has(num + 1)) {
                map.get(num + 1).prev = map.get(num);
            }
        }
    }
    
    // 第二次遍历：构建结果数组
    const visited = new Set();
    for (const [num, node] of map) {
        if (visited.has(num)) continue;
        
        // 找到当前连续序列的起始点
        let start = node;
        while (start.prev) {
            start = start.prev;
        }
        
        // 收集连续序列
        const group = [];
        let current = start;
        while (current) {
            group.push(current.value);
            visited.add(current.value);
            current = current.next;
        }
        
        result.push(group);
    }
    
    return result;
}

console.log(groupConsecutiveNumbers(arr));
