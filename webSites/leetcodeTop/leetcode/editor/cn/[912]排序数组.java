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

    static public void randomArrayFirst(int[] nums, int i, int j) {
        int randomIndex = i + (int) (Math.random() * (j - i + 1));
        swapNums(nums, i, randomIndex);
    }

    static public void swapNums(int[] nums, int index1, int index2) {
        int tmp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = tmp;
    }

    static public void quickSort(int[] nums, int left, int right) {
        if (left >= right) return; // 终止条件

        randomArrayFirst(nums, left, right); // 选择随机基准点
        int pivot = nums[left]; // 基准值
        int i = left + 1, j = right; // 左右指针

        while (i <= j) {
            while (i <= j && nums[i] < pivot) i++; // 找到大于等于 pivot 的元素
            while (i <= j && nums[j] > pivot) j--; // 找到小于等于 pivot 的元素
            if (i <= j) {
                swapNums(nums, i, j);
                i++;
                j--;
            }
        }

        swapNums(nums, left, j); // 基准点归位

        quickSort(nums, left, j - 1); // 递归左半部分
        quickSort(nums, j + 1, right); // 递归右半部分
    }

    static public int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
        return nums;
    }

    public static void main(String[] args) {
        int[] nums1 = {5, 2, 3, 1};
        System.out.println(Arrays.toString(sortArray(nums1)));
        int[] nums2 = {5, 1, 1, 2, 0, 0};
        System.out.println(Arrays.toString(sortArray(nums2)));
        int[] nums3 = {-1, 2, -8, -10};
        System.out.println(Arrays.toString(sortArray(nums3)));
        int[] nums4 = {110, 100, 0};
        System.out.println(Arrays.toString(sortArray(nums4)));
    }
}
