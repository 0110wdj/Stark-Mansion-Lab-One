package cn.snofly.oop.demo02;

import cn.snofly.oop.demo03.Pet;

// 一个项目应该只有一个 main 方法
public class Application {
    public static void main(String[] args) {
        Pet dog = new Pet();
        dog.name = "旺财";
        dog.age = 3;
        dog.shout();
        System.out.println(dog.name);
        System.out.println(dog.age);

        Pet cat = new Pet();
        cat.name = "猫";
        cat.age = 3;
        cat.shout();
        System.out.println(cat.name);
        System.out.println(cat.age);
    }
}
