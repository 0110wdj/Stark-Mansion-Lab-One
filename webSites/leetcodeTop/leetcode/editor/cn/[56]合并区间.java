// 56 合并区间

import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int[][] merge(int[][] intervals) {
//        List<int[]> resList = new ArrayList<>();
//        Boolean init = true;
//        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
//        for (int i = 0; i < intervals.length; i++) {
//            int[] line = intervals[i];
//            if (init) {
//                resList.add(new int[]{line[0], line[1]});
//                init = false;
//            } else {
//                if (line[0] <= resList.get(resList.size() - 1)[1]) {
//                    if (line[1] > resList.get(resList.size() - 1)[1]) {
//                        resList.get(resList.size() - 1)[1] = line[1];
//                    }
//                } else {
//                    resList.add(new int[]{line[0], line[1]});
//                }
//            }
//        }
//        int[][] res = new int[resList.size()][2];
//
//        for (int i = 0; i < resList.size(); i++) {
//            int[] line = resList.get(i);
//            res[i] = line;
//        }
//        return res;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


import java.util.ArrayList;
import java.util.List;

class Solution56 {
    static public int[][] merge(int[][] intervals) {
        List<int[]> resList = new ArrayList<>();
        Boolean init = true;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        for (int i = 0; i < intervals.length; i++) {
            int[] line = intervals[i];
            if (init) {
                resList.add(new int[]{line[0], line[1]});
                init = false;
            } else {
                if (line[0] <= resList.get(resList.size() - 1)[1]) {
                    if (line[1] > resList.get(resList.size() - 1)[1]) {
                        resList.get(resList.size() - 1)[1] = line[1];
                    }
                } else {
                    resList.add(new int[]{line[0], line[1]});
                }
            }
        }
        int[][] res = new int[resList.size()][2];

        for (int i = 0; i < resList.size(); i++) {
            int[] line = resList.get(i);
            res[i] = line;
        }
        return res;
    }

    public static void main(String[] args) {
        int[][] res = merge(new int[][]{{1, 3}, {2, 6}, {8, 10}, {15, 18}});
        for (int[] lines : res) {
            for (int line : lines) {
                System.out.print(line + "\t");
            }
            System.out.println("\n");
        }

        int[][] res1 = merge(new int[][]{{1, 4}, {0, 4}});
        for (int[] lines : res1) {
            for (int line : lines) {
                System.out.print(line + "\t");
            }
            System.out.println("\n");
        }
        int[][] res2 = merge(new int[][]{{1, 4}, {2, 3}});
        for (int[] lines : res2) {
            for (int line : lines) {
                System.out.print(line + "\t");
            }
            System.out.println("\n");
        }
    }
}