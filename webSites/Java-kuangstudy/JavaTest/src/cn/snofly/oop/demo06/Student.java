package cn.snofly.oop.demo06;

public class Student extends Person {
    public void run() {
        System.out.println("son");
    }

    public void eat() {
        System.out.println("eat");
    }
}

/*
// 一个对象的实际类型是可以确定的
        // 但是可以指向的引用类型就不确定了,父类的引用指向子类

        Student s1 = new Student();
        Person s2 = new Student();
        Object s3 = new Student();

        s1.run();
        s2.run();

 */