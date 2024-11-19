package cn.snofly.operator;

public class Demo6 {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;
        System.out.println("a && b = " + (a && b));
        System.out.println("a || b = " + (a || b));
        System.out.println("!(a && b) = " + !(a && b));
        int c = 5;
        System.out.println("c++ = " + c++);
        System.out.println("c-- = " + c--);
        boolean d = (c < 4) && (c++ < 4);
        System.out.println(c);
        System.out.println(d);
    }
}
