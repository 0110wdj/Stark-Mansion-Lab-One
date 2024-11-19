package cn.snofly.ctrl;

import java.util.Scanner;

public class Demo1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("使用next方式接收：");

        if (sc.hasNext()) {
            String str = sc.next();
            System.out.println("你输入的是：" + str);
        }

        sc.close();
    }
}
