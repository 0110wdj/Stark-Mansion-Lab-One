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

    static public void quickSort(int[] nums, int i, int j) {
        if (j - i <= 1) return;
        if (i == nums.length - 1) return;
        if (j < 0) return;

        randomArrayFirst(nums, i, j);

        int left = i, right = j;
        int p = i;
        i++;

        while (i < j && i < right && j > left) {
            if (nums[i] < nums[p]) {
                i++;
                continue;
            }
            if (nums[j] > nums[p]) {
                j--;
                continue;
            }
            swapNums(nums, i, j);
        }

        if (nums[p] > nums[i]) {
            swapNums(nums, p, i);
        }
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }

    static public int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
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