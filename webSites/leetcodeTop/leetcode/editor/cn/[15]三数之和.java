// 15 三数之和

import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public List<List<Integer>> threeSum(int[] nums) {
//        List<List<Integer>> res = new ArrayList<>();
//        Arrays.sort(nums);
//        for (int i = 0; i < nums.length; i++) {
//            int target = -nums[i];
//            int j = i + 1;
//            int k = nums.length - 1;
//            while (j < k && j < nums.length) {
//                if (nums[j] + nums[k] == target) {
//                    ArrayList arrayList = new ArrayList<>();
//                    arrayList.add(nums[i]);
//                    arrayList.add(nums[j]);
//                    arrayList.add(nums[k]);
//                    res.add(arrayList);
//                    while (j < nums.length - 1) {
//                        if (nums[j] != nums[j + 1]) {
//                            j++;
//                            break;
//                        }
//                        j++;
//                    }
//                    while (k > j) {
//                        if (nums[k] != nums[k - 1]) {
//                            k--;
//                            break;
//                        }
//                        k--;
//                    }
//                } else if (nums[j] + nums[k] > target) {
//                    while (k > j) {
//                        if (nums[k] != nums[k - 1]) {
//                            k--;
//                            break;
//                        }
//                        k--;
//                    }
//                } else if (nums[j] + nums[k] < target) {
//                    while (j < nums.length - 1) {
//                        if (nums[j] != nums[j + 1]) {
//                            j++;
//                            break;
//                        }
//                        j++;
//                    }
//                }
//            }
//            while (i < nums.length - 1) {
//                if (nums[i] == nums[i + 1]) {
//                    i++;
//                } else {
//                    break;
//                }
//            }
//        }
//
//        return res;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.*;

class Solution15 {

    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            int target = -nums[i];
            int j = i + 1;
            int k = nums.length - 1;
            while (j < k && j < nums.length) {
                if (nums[j] + nums[k] == target) {
                    ArrayList arrayList = new ArrayList<>();
                    arrayList.add(nums[i]);
                    arrayList.add(nums[j]);
                    arrayList.add(nums[k]);
                    res.add(arrayList);
                    while (j < nums.length - 1) {
                        if (nums[j] != nums[j + 1]) {
                            j++;
                            break;
                        }
                        j++;
                    }
                    while (k > j) {
                        if (nums[k] != nums[k - 1]) {
                            k--;
                            break;
                        }
                        k--;
                    }
                } else if (nums[j] + nums[k] > target) {
                    while (k > j) {
                        if (nums[k] != nums[k - 1]) {
                            k--;
                            break;
                        }
                        k--;
                    }
                } else if (nums[j] + nums[k] < target) {
                    while (j < nums.length - 1) {
                        if (nums[j] != nums[j + 1]) {
                            j++;
                            break;
                        }
                        j++;
                    }
                }
            }
            while (i < nums.length - 1) {
                if (nums[i] == nums[i + 1]) {
                    i++;
                } else {
                    break;
                }
            }
        }

        return res;
    }

    public static void main(String[] args) {
        Solution15 solution15 = new Solution15();
        System.out.println(solution15.threeSum(new int[]{-1, 0, 1, 2, -1, -4}).toString());
        System.out.println(solution15.threeSum(new int[]{0, 0, 0}).toString());
    }
}