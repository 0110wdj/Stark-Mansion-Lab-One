// 周一算法题之「三数之和」

// 给定一个整数数组，找出数组中和为 0 的三个数。

// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const result = [];
    const len = nums.length;
    
    // 如果数组长度小于3，直接返回空数组
    if (len < 3) return result;
    
    // 先对数组进行排序
    nums.sort((a, b) => a - b);
    
    // 如果最小的数大于0或最大的数小于0，不可能有解
    if (nums[0] > 0 || nums[len - 1] < 0) return result;
    
    for (let i = 0; i < len - 2; i++) {
        // 如果当前数大于0，后面的数都大于0，不可能有解
        if (nums[i] > 0) break;
        
        // 跳过重复的数字
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // 如果当前数加上后面两个最小的数都大于0，不可能有解
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
        
        // 如果当前数加上最后两个数都小于0，当前数太小，需要增大
        if (nums[i] + nums[len - 2] + nums[len - 1] < 0) continue;
        
        let left = i + 1;
        let right = len - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // 跳过重复的数字
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                // 如果和小于0，需要增大和，移动左指针
                left++;
                // 跳过重复的数字
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else {
                // 如果和大于0，需要减小和，移动右指针
                right--;
                // 跳过重复的数字
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    
    return result;
}

// 测试代码
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // 输出: [[-1, -1, 2], [-1, 0, 1]]
