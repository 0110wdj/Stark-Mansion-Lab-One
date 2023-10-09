# def hello():
#     print("Hello World!")


# hello()


# def max(a, b):
#     if a > b:
#         return a
#     else:
#         return b


# a = 4
# b = 5
# print(max(a, b))

# # 计算面积函数


# def area(width, height):
#     return width * height


# def print_welcome(name):
#     print("Welcome", name)


# print_welcome("Runoob")
# w = 4
# h = 5
# print("width =", w, " height =", h, " area =", area(w, h))

# 定义函数
# def printme(str):
#     # 打印任何传入的字符串
#     print(str)
#     return


# # 调用函数
# printme("我要调用用户自定义函数!")
# printme("再次调用同一函数")


# def change(a):
#     print(id(a))   # 指向的是同一个对象
#     a = 10
#     print(id(a))   # 一个新对象


# a = 1
# print(id(a))
# change(a)
# print(id(a))

# 可写函数说明


# def changeme(mylist):
#     "修改传入的列表"
#     mylist.append([1, 2, 3, 4])
#     print("函数内取值: ", mylist)
#     return


# # 调用changeme函数
# mylist = [10, 20, 30]
# changeme(mylist)
# print("函数外取值: ", mylist)

# 可写函数说明
# def printme(str):
#     "打印任何传入的字符串"
#     print(str)
#     return


# # 调用 printme 函数，不加参数会报错
# printme()

# 可写函数说明
# def printme(str):
#     "打印任何传入的字符串"
#     print(str)
#     return


# # 调用printme函数
# printme(str="菜鸟教程")

# 可写函数说明
# def printinfo(name, age):
#     "打印任何传入的字符串"
#     print("名字: ", name)
#     print("年龄: ", age)
#     return


# # 调用printinfo函数
# printinfo(age=50, name="runoob")

# # 可写函数说明
# def printinfo(name, age=35):
#     "打印任何传入的字符串"
#     print("名字: ", name)
#     print("年龄: ", age)
#     return


# # 调用printinfo函数
# printinfo(age=50, name="runoob")
# print("------------------------")
# printinfo(name="runoob")

# def functionname([formal_args,] *var_args_tuple ):
#    "函数_文档字符串"
#    function_suite
#    return [expression]

# 可写函数说明
# def printinfo(arg1, *vartuple):
#     "打印任何传入的参数"
#     print("输出: ")
#     print(arg1)
#     print(vartuple)


# # 调用printinfo 函数
# printinfo(70, 60, 50)

# def printinfo(arg1, *vartuple):
#     "打印任何传入的参数"
#     print("输出: ")
#     print(arg1)
#     for var in vartuple:
#         print(var)
#     return


# # 调用printinfo 函数
# printinfo(10)
# printinfo(70, 60, 50)

# 可写函数说明
# def printinfo(arg1, **vardict):
#     "打印任何传入的参数"
#     print("输出: ")
#     print(arg1)
#     print(vardict)


# # 调用printinfo 函数
# printinfo(1, a=2, b=3)

# x = lambda a : a + 10
# print(x(5))

# 可写函数说明
# sum = lambda arg1, arg2: arg1 + arg2

# # 调用sum函数
# print ("相加后的值为 : ", sum( 10, 20 ))
# print ("相加后的值为 : ", sum( 20, 20 ))

# def myfunc(n):
#     return lambda a: a * n


# mydoubler = myfunc(2)
# mytripler = myfunc(3)

# print(mydoubler(11))
# print(mytripler(11))

# # 可写函数说明
# def sum(arg1, arg2):
#     # 返回2个参数的和."
#     total = arg1 + arg2
#     print("函数内 : ", total)
#     return total


# # 调用sum函数
# total = sum(10, 20)
# print("函数外 : ", total)

# def f(a, b, /, c, d, *, e, f):
#     print(a, b, c, d, e, f)


# f(10, 20, 30, d=40, e=50, f=60)
# f(10, b=20, c=30, d=40, e=50, f=60)   # b 不能使用关键字参数的形式
# f(10, 20, 30, 40, 50, f=60)           # e 必须使用关键字参数的形式
