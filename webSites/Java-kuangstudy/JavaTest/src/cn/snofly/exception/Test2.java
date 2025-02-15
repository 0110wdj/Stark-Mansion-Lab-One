package cn.snofly.exception;

public class Test2 {
    public static void main(String[] args) {
        int a = 1;
        int b = 0;

        try {
            System.out.println(a / b);
        } catch (Exception e) {
            System.exit(1);
            throw new RuntimeException(e);
        } finally {
        }
    }
}
