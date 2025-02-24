// 912 排序数组

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static void swapNums(int[] nums, int i, int j) {
//        int tmp = nums[i];
//        nums[i] = nums[j];
//        nums[j] = tmp;
//    }
//
//    static void ramdom(int[] nums, int i, int j) {
//        int ramdomIndex = (int) (Math.random() * (j - i + 1) + i);
//        swapNums(nums, i, ramdomIndex);
//    }
//
//    static void sortArrayOneNumer(int[] nums, int i, int j) {
//        if (i >= j) return;
//
//        ramdom(nums, i, j);
//        int left = i + 1;
//        int right = j;
//
//        while (left <= right) {
//            if (left <= j && nums[left] <= nums[i]) {
//                left++;
//                continue;
//            }
//            if (right > i && nums[right] > nums[i]) {
//                right--;
//                continue;
//            }
//            if (left < right) {
//                swapNums(nums, left, right); // 交换左右不符合条件的元素
//                left++;
//                right--;
//            }
//        }
//        // 将基准元素放到正确的位置
//        swapNums(nums, i, right);
//
//        sortArrayOneNumer(nums, i, right - 1);
//        sortArrayOneNumer(nums, right + 1, j);
//    }
//
//     public int[] sortArray(int[] nums) {
//        sortArrayOneNumer(nums, 0, nums.length - 1);
//        return nums;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


import java.util.Arrays;

class Solution912 {

    static void swapNums(int[] nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    static void ramdom(int[] nums, int i, int j) {
        int ramdomIndex = (int) (Math.random() * (j - i + 1) + i);
        swapNums(nums, i, ramdomIndex);
    }

    static void sortArrayOneNumer(int[] nums, int i, int j) {
        if (i >= j) return;

        ramdom(nums, i, j);
        int left = i + 1;
        int right = j;

        while (left <= right) {
            if (left <= j && nums[left] <= nums[i]) {
                left++;
                continue;
            }
            if (right > i && nums[right] > nums[i]) {
                right--;
                continue;
            }
            if (left < right) {
                swapNums(nums, left, right); // 交换左右不符合条件的元素
                left++;
                right--;
            }
        }
        // 将基准元素放到正确的位置
        swapNums(nums, i, right);

        sortArrayOneNumer(nums, i, right - 1);
        sortArrayOneNumer(nums, right + 1, j);
    }

    static public int[] sortArray(int[] nums) {
        sortArrayOneNumer(nums, 0, nums.length - 1);
        return nums;
    }

    public static void main(String[] args) {
        int[] nums1 = new int[]{5, 2, 3, 1};
        System.out.println(Arrays.toString(sortArray(nums1)));
        int[] nums2 = new int[]{5, 1, 1, 2, 0, 0};
        System.out.println(Arrays.toString(sortArray(nums2)));
        int[] nums3 = new int[]{-1, 2, -8, -10};
        System.out.println(Arrays.toString(sortArray(nums3)));
        int[] nums4 = new int[]{110, 100, 0};
        System.out.println(Arrays.toString(sortArray(nums4)));
    }
}