package cn.snofly.oop;

import cn.snofly.oop.demo11.Outer;

// 一个项目应该只有一个 main 方法
public class Application {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        outer.out();
        inner.in();
        inner.getId();
    }
}

