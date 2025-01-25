package cn.snofly.oop;

import cn.snofly.oop.demo05.A;
import cn.snofly.oop.demo05.B;

// 一个项目应该只有一个 main 方法
public class Application {
    public static void main(String[] args) {
        A a = new A();
        a.test();
        // 父类的引用指向子类
        B b = new A();
        b.test();
    }
}
