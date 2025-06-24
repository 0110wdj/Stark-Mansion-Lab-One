// 160 相交链表

//leetcode submit region begin(Prohibit modification and deletion)

import java.util.List;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) {
 * val = x;
 * next = null;
 * }
 * }
 */
//public class Solution {
//    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
//        if (headA == null || headB == null) return null;
//        int switchFlag = 0;
//        ListNode rootA = headA;
//        ListNode rootB = headB;
//        while (switchFlag <= 2 && headA != null && headB != null) {
//            if (headA == headB) {
//                return headA;
//            }
//
//            headA = headA.next;
//            headB = headB.next;
//            if (headA == null && switchFlag < 2) {
//                headA = rootB;
//                switchFlag++;
//            }
//            if (headB == null && switchFlag < 2) {
//                headB = rootA;
//                switchFlag++;
//            }
//        }
//        return null;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)
