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

## 05 Switch 选择结构

case 穿透

> 字节码 IDEA 直接反编译查看

## 06 while 循环详解

略

## 07 DoWhile 循环

略

## 08 For 循环详解

```
for (初始化;布尔表达式;更新) {
    // 代码语句
}

// 100.for 快捷方式
```

## 09 打印九九乘法表

```Java
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
```

## 10 增强 for 循环

略

## 11 break、continue、goto

略

## 12 打印三角形及 DEBUG

略