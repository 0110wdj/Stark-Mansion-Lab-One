// 141 环形链表

//leetcode submit region begin(Prohibit modification and deletion)

import java.util.List;

/**
 * Definition for singly-linked list.
 * class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) {
 * val = x;
 * next = null;
 * }
 * }
 */
//public class Solution {
//    public boolean hasCycle(ListNode head) {
//        if (head == null) return false;
//        ListNode slowly = head;
//        ListNode quickly = head.next;
//        while (slowly != null && quickly != null) {
//            if (slowly == quickly) {
//                return true;
//            }
//            slowly = slowly.next;
//            if (quickly.next == null) return false;
//            quickly = quickly.next.next;
//        }
//        return false;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)
