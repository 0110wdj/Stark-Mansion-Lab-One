package cn.snofly.oop.demo05;

public class Student extends Person {
    private String name = "snoflyStudent";

    public Student (String sname,String pname){
        super(pname);
        this.name = sname;
        System.out.println("Student Student");
    }
}

//  Student s1 = new Student("ssname","ppname");