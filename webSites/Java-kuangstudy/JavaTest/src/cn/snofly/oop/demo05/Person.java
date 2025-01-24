package cn.snofly.oop.demo05;

public class Person {

    private int money = 10_0000_0000;

    public void say() {
        System.out.println("say something");
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public int getMoney() {
        return money;
    }
}
