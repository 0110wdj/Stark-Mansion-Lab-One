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

    public List<List<Integer>> threeSumSource(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<List<Integer>>();
        // 枚举 a
        for (int first = 0; first < n; ++first) {
            // 需要和上一次枚举的数不相同
            if (first > 0 && nums[first] == nums[first - 1]) {
                continue;
            }
            // c 对应的指针初始指向数组的最右端
            int third = n - 1;
            int target = -nums[first];
            // 枚举 b
            for (int second = first + 1; second < n; ++second) {
                // 需要和上一次枚举的数不相同
                if (second > first + 1 && nums[second] == nums[second - 1]) {
                    continue;
                }
                // 需要保证 b 的指针在 c 的指针的左侧
                while (second < third && nums[second] + nums[third] > target) {
                    --third;
                }
                // 如果指针重合，随着 b 后续的增加
                // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
                if (second == third) {
                    break;
                }
                if (nums[second] + nums[third] == target) {
                    List<Integer> list = new ArrayList<Integer>();
                    list.add(nums[first]);
                    list.add(nums[second]);
                    list.add(nums[third]);
                    ans.add(list);
                }
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution15 solution15 = new Solution15();
        System.out.println(solution15.threeSum(new int[]{-1, 0, 1, 2, -1, -4}).toString());
        System.out.println(solution15.threeSum(new int[]{0, 0, 0}).toString());
    }
}