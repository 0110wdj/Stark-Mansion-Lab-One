package cn.snofly.oop;

import java.io.IOException;

// Demo01 类
public class Demo01 {
    // main 方法
    public static void main(String[] args) {
        int[] a = new int[]{1, 2};
        System.out.println(a[2]);
    }

    public String sayHello() {
        return "hello,world";
    }

    public int max(int a, int b) {
        if (a >= b) return a;
        return b;
    }

    // 数组下标越界 ArrayIndexOutOfBoundsException

    public void readFile(String file) throws IOException {

    }
}
