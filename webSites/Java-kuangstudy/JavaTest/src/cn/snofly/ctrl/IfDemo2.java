package cn.snofly.ctrl;

import java.util.Scanner;

public class IfDemo2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("请输入：");
        int score = sc.nextInt();
        if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }

        sc.close();
    }
}
