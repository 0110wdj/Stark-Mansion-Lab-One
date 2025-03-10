// 54 螺旋矩阵

import java.util.ArrayList;
import java.util.List;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public List<Integer> spiralOrder(int[][] matrix) {
//        List list = new ArrayList<>();
//        if (matrix.length == 0) return list;
//
//        ListNode steps = new ListNode(0);
//        steps.next = new ListNode(1, new ListNode(2, new ListNode(3, steps)));
//
//        int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
//        while (top <= bottom && left <= right) {
//            switch (steps.val) {
//                case 0:
//                    for (int i = left; i <= right; i++) {
//                        list.add(matrix[top][i]);
//                    }
//                    top++;
//                    steps = steps.next;
//                    break;
//                case 1:
//                    for (int i = top; i <= bottom; i++) {
//                        list.add(matrix[i][right]);
//                    }
//                    right--;
//                    steps = steps.next;
//                    break;
//                case 2:
//                    for (int i = right; i >= left; i--) {
//                        list.add(matrix[bottom][i]);
//                    }
//                    bottom--;
//                    steps = steps.next;
//                    break;
//                case 3:
//                    for (int i = bottom; i >= top; i--) {
//                        list.add(matrix[i][left]);
//                    }
//                    left++;
//                    steps = steps.next;
//                    break;
//            }
//        }
//        return list;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.List;

class Solution54 {
    static public List<Integer> spiralOrder(int[][] matrix) {
        List list = new ArrayList<>();
        if (matrix.length == 0) return list;

        ListNode steps = new ListNode(0);
        steps.next = new ListNode(1, new ListNode(2, new ListNode(3, steps)));

        int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
        while (top <= bottom && left <= right) {
            switch (steps.val) {
                case 0:
                    for (int i = left; i <= right; i++) {
                        list.add(matrix[top][i]);
                    }
                    top++;
                    steps = steps.next;
                    break;
                case 1:
                    for (int i = top; i <= bottom; i++) {
                        list.add(matrix[i][right]);
                    }
                    right--;
                    steps = steps.next;
                    break;
                case 2:
                    for (int i = right; i >= left; i--) {
                        list.add(matrix[bottom][i]);
                    }
                    bottom--;
                    steps = steps.next;
                    break;
                case 3:
                    for (int i = bottom; i >= top; i--) {
                        list.add(matrix[i][left]);
                    }
                    left++;
                    steps = steps.next;
                    break;
            }
        }
        return list;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println(spiralOrder(matrix));
    }
}