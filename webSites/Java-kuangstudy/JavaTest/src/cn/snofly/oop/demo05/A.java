package cn.snofly.oop.demo05;

public class A extends B {
    @Override
    public void test() {
//        super.test();
        System.out.println("A  test");
    }
}

/**
 * A a = new A();
 * a.test();
 * // 父类的引用指向子类
 * B b = new A();
 * b.test();
 */