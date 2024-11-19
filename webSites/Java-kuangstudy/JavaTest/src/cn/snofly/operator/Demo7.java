package cn.snofly.operator;

public class Demo7 {
    public static void main(String[] args) {
        /*
        A = 0011 1100
        B = 0000 1101
        A&B = 0000 1100
        A|B = 0011 1101
        A^B = 0011 0001
        _B = 1111 0010
         */
        System.out.println(2 << 3);
        System.out.println(1024 << 8);
        System.out.println(1024 << 10);
        System.out.println(1024 << 50);
        System.out.println(268435456 << 2);
        System.out.println(268435456 << 3);
        System.out.println(268435456 << 4);
        System.out.println(268435456 << 10);
        System.out.println(268435456 << 20);
        System.out.println(1024 << 75);
        System.out.println(1024 << 100);
    }
}
