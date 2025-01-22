package cn.snofly.oop.demo01;

public class Demo05 {
    public static void main(String[] args) {
        Person person = new Person();
        System.out.println(person.name);
        Demo05.change(person);
        System.out.println(person.name);
    }

    public static void change(Person person) {
        person.name = "snofly";
    }
}

class Person {
    String name;

}
