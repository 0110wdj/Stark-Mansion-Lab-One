package cn.snofly.method;

public class Demo05 {
    public static void main(String[] args) {
        Demo05 demo05 = new Demo05();
        demo05.test(1, 2, 3);
    }

    public void test(int... i) {
        for (int j = 0; j < i.length; j++) {
            System.out.println(i[j]);
        }
    }
}
