package cn.snofly.oop.demo11;

public class Outer {
    private int id = 10;

    public void out() {
        System.out.println("out class fun");
    }

    // 成员内部类
    public class Inner {
        public void in() {
            System.out.println("in class fun");
        }

        public void getId() {
            System.out.println(id);
        }
    }

    // 静态内部类
    public static class InnerStatic {
        public void in() {
            System.out.println("InnerStatic class fun");
        }
    }

    // 局部内部类
    public void method() {
        class B {

        }
    }
}

// 一个 Java 类中可以有多个 class 类，但只能有一个 public class
class A {

}