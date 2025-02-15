package cn.snofly.exception.demo02;

// 自定义的异常类
public class MyException extends Exception {
    // 传递数字大于 10 认为异常
    private int detail;

    public MyException(int a) {
        this.detail = a;
    }


    public String string() {
        return "MyException { detail = " + detail + "}";
    }

    public String toSting() {
        return "MyException { detail = " + detail + "}";
    }
}
