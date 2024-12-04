package cn.snofly.ctrl;

public class BreakDemo {
    public static void main(String[] args) {
        int i = 0;
        while (i < 100) {
            i++;
            if (i == 30) {
//                break;
                continue;
            }
            System.out.println(i);
        }
    }
}
