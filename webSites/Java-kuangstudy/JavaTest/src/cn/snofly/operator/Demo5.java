package cn.snofly.operator;

public class Demo5 {
    public static void main(String[] args) {
        int a = 3;
        int b = a++;
        int c = ++a;

        System.out.println(a);
        System.out.println(a);
        System.out.println(b);
        System.out.println(b);
        System.out.println(c);
        System.out.println(c);

        double pow = Math.pow(3, 2);
        System.out.println(pow);
    }
}
