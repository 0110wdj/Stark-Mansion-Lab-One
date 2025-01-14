// 206 反转链表

//leetcode submit region begin(Prohibit modification and deletion)

//class Solution {
//    public ListNode reverseList(ListNode head) {
//        if (head == null) return null;
//        if (head.next == null) return head;
//        ListNode newHead = this.reverseList(head.next);
//        head.next.next = head;
//        head.next = null;
//        return newHead;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution206 {
    static public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    static public ListNode reverseList(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return head;
        ListNode newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    static public void printListNode(ListNode root) {
        ListNode head = root;
        while (head != null) {
            System.out.print(head.val + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ListNode root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
        ListNode reverseRoot = reverseList(root);
        printListNode(reverseRoot);
    }
}