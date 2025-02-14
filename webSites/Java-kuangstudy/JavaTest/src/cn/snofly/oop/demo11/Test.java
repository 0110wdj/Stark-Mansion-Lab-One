package cn.snofly.oop.demo11;

public class Test {
    public static void main(String[] args) {
        Apple apple = new Apple();

        // 匿名，没有名字初始化类，不用将实例保存到变量中
        new Apple().eat();

        new UserService() {
            @Override
            public void Hello() {

            }
        };
    }
}

class Apple {
    public void eat() {
        System.out.println("1");
    }
}

interface UserService {
    void Hello();
}