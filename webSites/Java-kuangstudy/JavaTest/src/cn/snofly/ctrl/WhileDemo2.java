package cn.snofly.ctrl;

public class WhileDemo2 {
    public static void main(String[] args) {

//        while (true) {
//            System.out.println("hello");
//        }
        int i = 0;
        int sum = 0;
        while (i <= 100) {
            sum += i++;
        }
        System.out.println(sum);
    }
}
