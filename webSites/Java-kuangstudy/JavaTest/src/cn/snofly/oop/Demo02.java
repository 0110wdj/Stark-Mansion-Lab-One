package cn.snofly.oop;

public class Demo02 {
    public static void main(String[] args) {
//        Student.say();
        Student student = new Student();
        student.say();
    }

    // 和类一起加载的
    public static void a() {
//        b();
    }

    // 类实例花 之后才存在
    public void b() {
        a();
    }
}

