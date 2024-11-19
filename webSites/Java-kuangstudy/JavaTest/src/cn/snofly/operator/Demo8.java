package cn.snofly.operator;

public class Demo8 {

    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        a += b; // a = a + b
        a -= b; // a = a - b
        System.out.println(a);
        // 字符串连接符 +，String
        System.out.println(a + b);
        System.out.println("" + a + b);
        System.out.println(a + b + "");
    }
}
