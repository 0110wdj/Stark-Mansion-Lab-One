// 9 回文数

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public boolean isPalindrome(int x) {
//        if (x < 0) return false;
//        if (x < 10 ) return true;
//        if (x % 10 == 0) return false;
//        int tailNumber = 0;
//        int currentNumer = 0;
//        int headNumber = x;
//        while (headNumber >= tailNumber) {
//            if (headNumber == tailNumber) return true;
//            currentNumer = headNumber % 10;
//            headNumber = headNumber / 10;
//            if (headNumber == tailNumber) return true;
//            tailNumber = tailNumber * 10 + currentNumer;
//        }
//        return false;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution9 {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        if (x < 10 ) return true;
        if (x % 10 == 0) return false;
        int tailNumber = 0;
        int currentNumer = 0;
        int headNumber = x;
        while (headNumber >= tailNumber) {
            if (headNumber == tailNumber) return true;
            currentNumer = headNumber % 10;
            headNumber = headNumber / 10;
            if (headNumber == tailNumber) return true;
            tailNumber = tailNumber * 10 + currentNumer;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(new Solution9().isPalindrome(121));
        System.out.println(new Solution9().isPalindrome(22));
        System.out.println(new Solution9().isPalindrome(-121));
        System.out.println(new Solution9().isPalindrome(10));
        ;
    }
}