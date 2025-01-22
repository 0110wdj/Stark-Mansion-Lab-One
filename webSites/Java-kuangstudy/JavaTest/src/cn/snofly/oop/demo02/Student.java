package cn.snofly.oop.demo02;

// 学生
public class Student {
    // 属性：字段
    String name;
    int age;

    // 方法
    public void study() {
        System.out.println(this.name + " is learning");
    }
}


/**
 *   // 类：抽象的，实例化
 *         // 类实例化后会返回一个自己的对象
 *         // student 对象就是一个 Student 类的具体实例
 *
 *         Student xh = new Student();
 *         Student xm = new Student();
 *
 *         xm.name = "xm";
 *         xm.age = 3;
 *         System.out.println(xm.name);
 *         System.out.println(xm.age);
 *
 *         xh.name = "xh";
 *         xh.age = 3;
 *         System.out.println(xh.name);
 *         System.out.println(xh.age);
 *
 *         xh.study();
 *         xm.study();
 *
 */