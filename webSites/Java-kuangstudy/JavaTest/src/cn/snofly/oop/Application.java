package cn.snofly.oop;

import cn.snofly.oop.demo05.A;
import cn.snofly.oop.demo05.B;
import cn.snofly.oop.demo06.Student;

// 一个项目应该只有一个 main 方法
public class Application {
    public static void main(String[] args) {
        // 一个对象的实际类型是可以确定的
        new Student();
        // 但是可以指向的引用类型就不确定了

    }
}
