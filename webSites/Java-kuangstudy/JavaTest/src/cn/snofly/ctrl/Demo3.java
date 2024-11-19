package cn.snofly.ctrl;

import java.util.Scanner;

public class Demo3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入数据：");
        String str = sc.nextLine();
        System.out.println("输出的内容为：" + str);
        sc.close();
    }
}
