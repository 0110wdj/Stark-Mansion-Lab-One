package cn.snofly.oop.demo10;

// 锻炼抽象的思维
public interface UserService {
    // 接口中的所有定义都是抽象的 public abstract

    // 常量 public static final
    int AGE = 99;

    void add(String name);

    void update(String name);

    void delete(String name);

    void query(String name);
}
