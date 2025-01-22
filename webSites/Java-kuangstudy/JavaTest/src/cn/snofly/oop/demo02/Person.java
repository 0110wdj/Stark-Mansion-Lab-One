package cn.snofly.oop.demo02;

// java --> class
public class Person {
    // 一个类即使什么也不写，也会存在一个方法
    // 显示的定义构造器

    String name;
    int age;

    // 实例化初始值
    // 1.使用 new 关键字，本质是在调用构造器
    // 2.用来初始化值
    public Person() {
        this.name = "snofly";
    }

    // 有参构造：一旦定义了有参构造，无参就必须显示定义
    public Person(String name) {
        this.name = name;
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

}


/**
 * // new 实例化了一个对象
 * Person person = new Person();
 * System.out.println(person.name);
 * <p>
 * Person person2 = new Person("s2");
 * System.out.println(person2.name);
 */