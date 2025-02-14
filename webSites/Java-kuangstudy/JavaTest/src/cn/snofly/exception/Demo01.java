package cn.snofly.exception;

public class Demo01 {
    public static void main(String[] args) {
//        new Demo01().a();
//        System.out.println(11 / 0);
//        System.out.println()
    }

    public void a() {
        b();
    }

    public void b() {
        a();
    }
}
