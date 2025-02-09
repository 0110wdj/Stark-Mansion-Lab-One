package cn.snofly.oop;

import cn.snofly.oop.demo07.Person;
import cn.snofly.oop.demo07.Student;
import cn.snofly.oop.demo07.Teacher;

// 一个项目应该只有一个 main 方法
public class Application {
    public static void main(String[] args) {
        Person obj = new Student();

        ((Student) obj).go();

        Student s1 = new Student();
        s1.go();

        Person person = s1;
    }
}

