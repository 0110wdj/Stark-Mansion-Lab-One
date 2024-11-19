package base;

public class Main {
    public static void main(String[] args) {
        // 单行注释
        System.out.println("Hello world!");
        /*
        多行注释
         */

        // JavaDoc:文档注释 /** */
        /**
         * @Description Hello word
         * @Author Snofly
         */
//        float f = 0.1f;
//        Double d = 1.0/10;
//        System.out.println(f==d);
//
//        float d1 = 232321231f;
//        float d2 = d1 + 1;
//        System.out.println(d2==d1);
//        char c1 = 'a';
//        char c2 = '中';
//        char c3 = '\u0061';
//
//        System.out.println(c1);
//        System.out.println((int)c1);
//        System.out.println(c2);
//        System.out.println((int)c2);
//        System.out.println(c3);

        String sa = new String("hello world");
        String sb = new String("hello world");
        String sc = "hello world";
        String sd = "hello world";
        System.out.println(sa == sb);
        System.out.println(sc == sd);
    }
}