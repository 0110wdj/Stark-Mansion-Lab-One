package cn.snofly.oop;

import cn.snofly.oop.demo05.Student;

// 一个项目应该只有一个 main 方法
public class Application {
    public static void main(String[] args) {
        Student student = new Student();
        student.say();
        System.out.println(student.getMoney());
    }
}
