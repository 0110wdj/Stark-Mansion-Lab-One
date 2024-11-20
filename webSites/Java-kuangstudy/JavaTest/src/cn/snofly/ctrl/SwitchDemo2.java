package cn.snofly.ctrl;

public class SwitchDemo2 {
    public static void main(String[] args) {
        String name = "中文";
        // jdk 7的新特性，表达式结果可以是字符串！！！
        // 字符的本质还是数字
        // 反编译 java --- class（字节码文件） --- 反编译（IDEA）
        switch (name) {
            case "中文1":
                System.out.println("中文1");
                break;
            case "中文2":
                System.out.println("中文2");
                break;
            default:
                System.out.println("中文3");
        }

    }
}
