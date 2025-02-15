package cn.snofly.exception;

public class Test {
    public static void main(String[] args) {
        try {
            new Test().test(1, 0);
        } catch (ArithmeticException e) {
            System.out.println("throws");
        } finally {
        }
    }

    public void test(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException();
        }
        System.out.println(a / b);
    }
}


/**
 * try {// try 监控区域
 * System.out.println(a / b);
 * } catch (Error e) {
 * System.out.println("程序出现异常 Error");
 * } catch (Exception e) {
 * System.out.println("程序出现异常 Exception");
 * } catch (Throwable e) {
 * throw new RuntimeException("程序出现异常 Throwable");
 * } finally {
 * System.out.println("finally");
 * }
 */