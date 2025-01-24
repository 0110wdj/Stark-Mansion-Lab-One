package cn.snofly.oop.demo04;

// 类 private：私有
public class Student {

    private String name;

    private int id;

    private char sex;

    private int age;

    public char getSex() {
        return sex;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = (age > 120 || age < 3) ? 3 : age;
    }
}

/**
 * Student s1 = new Student();
 * s1.setName("snofly");
 * System.out.println(s1.getName());
 * s1.setAge(999);
 * System.out.println(s1.getAge());
 */
