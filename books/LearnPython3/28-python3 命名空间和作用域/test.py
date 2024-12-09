# # var1 是全局名称
# var1 = 5


# def some_func():

#     # var2 是局部名称
#     var2 = 6

#     def some_inner_func():

#         # var3 是内嵌的局部名称
#         var3 = 7
#!/usr/bin/python3

# total = 0  # 这是一个全局变量
# # 可写函数说明


# def sum(arg1, arg2):
#     # print(total)
#     # 返回2个参数的和."
#     total = arg1 + arg2  # total在这里是局部变量.
#     print("函数内是局部变量 : ", total)
#     return total


# # 调用sum函数
# sum(10, 20)
# print("函数外是全局变量 : ", total)

# #!/usr/bin/python3

# num = 1


# def fun1():
#     global num  # 需要使用 global 关键字声明
#     print(num)
#     num = 123
#     print(num)


# fun1()
# print(num)

#!/usr/bin/python3

def outer():
    num = 10

    def inner():
        nonlocal num   # nonlocal关键字声明
        num = 100
        print(num)
    inner()
    print(num)


outer()
