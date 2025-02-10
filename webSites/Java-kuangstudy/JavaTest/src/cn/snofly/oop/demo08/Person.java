package cn.snofly.oop.demo08;

public final class Person {

    public Person() {
        System.out.println("构造方法");
    }

    {
        // 代码块（匿名代码块）
        System.out.println("匿名代码块");
    }

    public static void main(String[] args) {
        System.out.println("main");
        new Person();
        System.out.println("=======");
        new Person();
    }

    static {
        // 静态代码块
        System.out.println("静态代码块");
    }
}
