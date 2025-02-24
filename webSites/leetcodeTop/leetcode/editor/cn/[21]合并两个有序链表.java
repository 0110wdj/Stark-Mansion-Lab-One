// 21 合并两个有序链表

//leetcode submit region begin(Prohibit modification and deletion)

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
//    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
//        if (list1 == null && list2 == null) return null;
//        if (list1 == null) return list2;
//        if (list2 == null) return list1;
//
//        ListNode head;
//        if (list1.val <= list2.val) {
//            head = list1;
//            list1 = list1.next;
//        } else {
//            head = list2;
//            list2 = list2.next;
//        }
//        ListNode tail = head;
//
//        while (list1 != null && list2 != null) {
//            if (list1.val <= list2.val) {
//                tail.next = list1;
//                tail = tail.next;
//                list1 = list1.next;
//            } else {
//                tail.next = list2;
//                tail = tail.next;
//                list2 = list2.next;
//            }
//        }
//        if (list1 != null) {
//            tail.next = list1;
//        }
//        if (list2 != null) {
//            tail.next = list2;
//        }
//        return head;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class ListNode {
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

class Solution21 {

    static public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null && list2 == null) return null;
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        ListNode head;
        if (list1.val <= list2.val) {
            head = list1;
            list1 = list1.next;
        } else {
            head = list2;
            list2 = list2.next;
        }
        ListNode tail = head;

        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                tail = tail.next;
                list1 = list1.next;
            } else {
                tail.next = list2;
                tail = tail.next;
                list2 = list2.next;
            }
        }
        if (list1 != null) {
            tail.next = list1;
        }
        if (list2 != null) {
            tail.next = list2;
        }
        return head;
    }

    static void printNode(ListNode head) {
        while (head != null) {
            System.out.print("\t" + head.val);
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ListNode list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        ListNode list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        ListNode merge = mergeTwoLists(list1, list2);
        printNode(merge);
    }
}