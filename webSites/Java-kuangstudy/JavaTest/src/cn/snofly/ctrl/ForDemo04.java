package cn.snofly.ctrl;

public class ForDemo04 {
    public static void main(String[] args) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((j + 1) + "*" + (i + 1) + "=" + (i + 1) * (j + 1) + "\t");
            }
            System.out.println("");
        }
    }
}
