## 01 用户交互 Scanner

Scanner 类

```java
import java.util.Scanner;

// 从键盘接收数据
public class Deno2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("使用nextLine方式接收：");
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            System.out.println("你输入的是：" + str);
        }
        sc.close();
    }
}

```

next() 与 nextLine() 区别

1. 一定要读取到有效字符后才可以结束输入
2. 对输入有效字符之前遇到的空白，next() 方法会自动将其去掉
3. 只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符
4. next() 不能得到带有空格的字符串

nextLine()

1. 以 Enter 为结束符，也就是说 nextLine() 方法返回的是输入回车之前的所有字符
2. 可以获得空白

## 02 Scanner 进阶使用

略

## 03 顺序结构

略

## 04 选择结构

- if 单选择结构
- if 双选择结构
- if 多选择结构
- 嵌套的 if 结构
- switch 多选择结构
