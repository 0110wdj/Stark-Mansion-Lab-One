package cn.snofly.ctrl;

import java.util.Scanner;

public class Deno2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("使用nextLine方式接收：");
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            System.out.println("你输入的是：" + str);
        }
        sc.close();
    }
}
