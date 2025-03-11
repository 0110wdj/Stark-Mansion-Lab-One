// 704 二分查找

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int searchFromRange(int[] nums, int target, int i, int j) {
//        if (i > j) return -1;
//        int mid = (j - i) / 2 + i;
//        if (nums[mid] > target) return searchFromRange(nums, target, i, mid - 1);
//        if (nums[mid] < target) return searchFromRange(nums, target, mid + 1, j);
//        return mid;
//    }
//
//    public int search(int[] nums, int target) {
//        return searchFromRange(nums, target, 0, nums.length - 1);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


class Solution704 {
    static public int searchFromRange(int[] nums, int target, int i, int j) {
        if (i > j) return -1;
        int mid = (j - i) / 2 + i;
        if (nums[mid] > target) return searchFromRange(nums, target, i, mid - 1);
        if (nums[mid] < target) return searchFromRange(nums, target, mid + 1, j);
        return mid;
    }

    static public int search(int[] nums, int target) {
        return searchFromRange(nums, target, 0, nums.length - 1);
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1, 0, 3, 5, 9, 12}, 9));
        System.out.println(search(new int[]{-1, 0, 3, 5, 9, 12}, 2));
    }
}