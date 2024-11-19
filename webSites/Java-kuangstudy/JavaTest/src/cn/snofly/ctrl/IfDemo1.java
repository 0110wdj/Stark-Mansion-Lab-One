package cn.snofly.ctrl;

import java.util.Scanner;

public class IfDemo1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("请输入：");
        String str = sc.nextLine();
        if (str.equals("Hello")) {
            System.out.println("你好");
        } else {
            System.out.println("你不好");
        }

        sc.close();
    }
}
