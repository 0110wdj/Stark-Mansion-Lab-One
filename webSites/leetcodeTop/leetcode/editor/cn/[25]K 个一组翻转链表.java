// 25 K 个一组翻转链表

//leetcode submit region begin(Prohibit modification and deletion)

import java.util.List;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
//class Solution {
//    static public ListNode reverseList(ListNode head) {
//        ListNode prev = null;
//        ListNode curr = head;
//
//        while (curr != null) {
//            ListNode next = curr.next; // 暂存下一个节点
//            curr.next = prev;          // 当前节点指向前一个节点（反转）
//            prev = curr;               // 前节点移动到当前
//            curr = next;               // 当前节点向后移动
//        }
//
//        return prev; // prev 最终指向反转后的头节点
//    }
//
//    static public ListNode reverseKGroup(ListNode head, int k) {
//        ListNode root = head;
//        ListNode end = null;
//        for (int i = 0; i < k; i++) {
//            if (root == null) return head;
//            // 标记最后一个
//            if (i == k - 1) {
//                end = root;
//            }
//            root = root.next;
//        }
//
//        if (end != null) {
//            end.next = null;
//        }
//
//        ListNode nextHead = reverseKGroup(root, k);
//        ListNode newHead = reverseList(head);
//        head.next = nextHead;
//        return newHead;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


class Solution25 {
    static public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next; // 暂存下一个节点
            curr.next = prev;          // 当前节点指向前一个节点（反转）
            prev = curr;               // 前节点移动到当前
            curr = next;               // 当前节点向后移动
        }

        return prev; // prev 最终指向反转后的头节点
    }

    static public ListNode reverseKGroup(ListNode head, int k) {
        ListNode root = head;
        ListNode end = null;
        for (int i = 0; i < k; i++) {
            if (root == null) return head;
            // 标记最后一个
            if (i == k - 1) {
                end = root;
            }
            root = root.next;
        }

        if (end != null) {
            end.next = null;
        }

        ListNode nextHead = reverseKGroup(root, k);
        ListNode newHead = reverseList(head);
        head.next = nextHead;
        return newHead;
    }

    public static void main(String[] args) {
        ListNode root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        ListNode revRoot = reverseKGroup(root, 2);
        while (revRoot != null) {
            System.out.println(revRoot.val);
            revRoot = revRoot.next;
        }
    }
}