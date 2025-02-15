package cn.snofly.exception.demo02;

public class Test {

    public static void test(int a) throws MyException {
        if (a > 10) {
            throw new MyException(a);
        }
        System.out.println("ok");
    }

    public static void main(String[] args) {
        try {
            test(11);
        } catch (MyException e) {
            System.out.println("=> " + e);
        }
    }
}
