/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let i = 1, j = n;
        while (i <= j) {
            const m = Math.floor(i + (j - i) / 2)
            if (isBadVersion(m)) {
                j = m - 1
            } else {
                i = m + 1
            }
        }
        return i
    };
};
// @lc code=end
console.log(solution((i: number) => { return i >= 4 })(5));
console.log(solution((i: number) => { return i >= 1 })(1));
