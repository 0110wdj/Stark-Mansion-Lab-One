package cn.snofly.oop.demo09;

// abstract 抽象类：类 extends: 单继承 （接口可以多继承）
public abstract class Action {
    // 约束
    // 抽象方法，只有方法名字，没有方法实现
    public abstract void doSomething();

    // 抽象类不能 new
    // 抽象类可以写普通方法
    // 普通类不能有抽象方法
}
