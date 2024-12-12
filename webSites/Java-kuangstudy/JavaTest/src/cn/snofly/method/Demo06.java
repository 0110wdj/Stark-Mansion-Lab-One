package cn.snofly.method;

public class Demo06 {
    public static void main(String[] args) {
        System.out.println(mutil(5));
    }

    public static int mutil(int n) {
        if (n == 1) return 1;
        return n * mutil(n - 1);
    }
}
