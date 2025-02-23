// 146 LRU 缓存

//leetcode submit region begin(Prohibit modification and deletion)
//class LRUCache {
//    // 双向链表的节点
//    class DoubleListNode {
//        DoubleListNode preNode;
//        DoubleListNode nextNode;
//        int value;
//        int mapKey;
//
//        DoubleListNode() {
//            this.value = -1;
//            this.mapKey = 0;
//            this.preNode = null;
//            this.nextNode = null;
//        }
//
//        DoubleListNode(int value) {
//            this.value = value;
//            this.mapKey = 0;
//            this.preNode = null;
//            this.nextNode = null;
//        }
//
//        DoubleListNode(int value, DoubleListNode preNode, DoubleListNode nextNode) {
//            this.value = value;
//            this.mapKey = 0;
//            this.preNode = preNode;
//            this.nextNode = nextNode;
//        }
//    }
//
//    List<DoubleListNode> cache;
//    DoubleListNode head;
//    DoubleListNode end;
//    int mapKey;
//    HashMap<Integer, DoubleListNode> keyNodeMap;
//
//    public LRUCache(int capacity) {
//        this.cache = new ArrayList<>(capacity);
//        this.keyNodeMap = new HashMap<>();
//
//        for (int i = 0; i < capacity; i++) {
//            DoubleListNode node = new DoubleListNode(i);
//            this.cache.add(node);
//        }
//        // 链接各个节点
//        for (int i = 0; i < capacity; i++) {
//            this.cache.get(i).preNode = i == 0 ? null : this.cache.get(i - 1);
//            this.cache.get(i).nextNode = i == capacity - 1 ? null : this.cache.get(i + 1);
//        }
//        this.head = this.cache.get(0);
//        this.end = this.cache.get(this.cache.size() - 1);
//    }
//
//    public int get(int key) {
//        if (this.keyNodeMap.containsKey(key)) {
//            DoubleListNode cur = this.keyNodeMap.get(key);
//            moveToHead(cur);
//            return this.head.value;
//        }
//        return -1;
//    }
//
//    public void moveToHead(DoubleListNode cur) {
//        if (cur != this.head) {
//            cur.preNode.nextNode = cur.nextNode;
//            if (cur.nextNode != null) {
//                cur.nextNode.preNode = cur.preNode;
//            } else {
//                this.end = cur.preNode;
//            }
//            this.head.preNode = cur;
//            cur.preNode = null;
//            cur.nextNode = this.head;
//            this.head = cur;
//        }
//    }
//
//    public void put(int key, int value) {
//        if (this.keyNodeMap.containsKey(key)) {
//            DoubleListNode cur = this.keyNodeMap.get(key);
//            cur.value = value;
//            moveToHead(cur);
//        } else {
//            this.keyNodeMap.remove(this.end.mapKey);
//            this.end.value = value;
//            moveToHead(this.end);
//            this.keyNodeMap.put(key, this.head);
//            this.head.mapKey = key;
//        }
//    }
//}
/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

class LRUCache {
    // 双向链表的节点
    class DoubleListNode {
        DoubleListNode preNode;
        DoubleListNode nextNode;
        int value;
        int mapKey;

        DoubleListNode() {
            this.value = -1;
            this.mapKey = 0;
            this.preNode = null;
            this.nextNode = null;
        }

        DoubleListNode(int value) {
            this.value = value;
            this.mapKey = 0;
            this.preNode = null;
            this.nextNode = null;
        }

        DoubleListNode(int value, DoubleListNode preNode, DoubleListNode nextNode) {
            this.value = value;
            this.mapKey = 0;
            this.preNode = preNode;
            this.nextNode = nextNode;
        }
    }

    List<DoubleListNode> cache;
    DoubleListNode head;
    DoubleListNode end;
    int mapKey;
    HashMap<Integer, DoubleListNode> keyNodeMap;

    public LRUCache(int capacity) {
        this.cache = new ArrayList<>(capacity);
        this.keyNodeMap = new HashMap<>();

        for (int i = 0; i < capacity; i++) {
            DoubleListNode node = new DoubleListNode(i);
            this.cache.add(node);
        }
        // 链接各个节点
        for (int i = 0; i < capacity; i++) {
            this.cache.get(i).preNode = i == 0 ? null : this.cache.get(i - 1);
            this.cache.get(i).nextNode = i == capacity - 1 ? null : this.cache.get(i + 1);
        }
        this.head = this.cache.get(0);
        this.end = this.cache.get(this.cache.size() - 1);
    }

    public int get(int key) {
        if (this.keyNodeMap.containsKey(key)) {
            DoubleListNode cur = this.keyNodeMap.get(key);
            moveToHead(cur);
            return this.head.value;
        }
        return -1;
    }

    public void moveToHead(DoubleListNode cur) {
        if (cur != this.head) {
            cur.preNode.nextNode = cur.nextNode;
            if (cur.nextNode != null) {
                cur.nextNode.preNode = cur.preNode;
            } else {
                this.end = cur.preNode;
            }
            this.head.preNode = cur;
            cur.preNode = null;
            cur.nextNode = this.head;
            this.head = cur;
        }
    }

    public void put(int key, int value) {
        if (this.keyNodeMap.containsKey(key)) {
            DoubleListNode cur = this.keyNodeMap.get(key);
            cur.value = value;
            moveToHead(cur);
        } else {
            this.keyNodeMap.remove(this.end.mapKey);
            this.end.value = value;
            moveToHead(this.end);
            this.keyNodeMap.put(key, this.head);
            this.head.mapKey = key;
        }
    }

    static void printList(LRUCache lruCache) {
        System.out.print("====>\t");
        System.out.print("head:" + lruCache.head.value + "\t");
        System.out.print("map:" + lruCache.keyNodeMap.toString() + "\t");
        for (int i = 0; i < lruCache.cache.size(); i++) {
            System.out.print(lruCache.cache.get(i).value + "\t");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LRUCache lruCache = new LRUCache(2);
        printList(lruCache);
        lruCache.put(1, 1);
        lruCache.put(2, 2);
        printList(lruCache);
        System.out.println(lruCache.get(1));
        printList(lruCache);
        lruCache.put(3, 3);
        printList(lruCache);
        System.out.println(lruCache.get(2));
        printList(lruCache);
        lruCache.put(4, 4);
        System.out.println(lruCache.get(1));
        System.out.println(lruCache.get(3));
        System.out.println(lruCache.get(4));
        printList(lruCache);
    }
}
