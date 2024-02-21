# list = [1, 2, 3, 4]
# it = iter(list)  # 创建迭代器对象
# print(next(it))  # 输出迭代器的下一个元素
# 1
# print(next(it))
# 2

# list = [1, 2, 3, 4]
# it = iter(list)    # 创建迭代器对象
# for x in it:
#     print(x, end=" ")

# import sys         # 引入 sys 模块

# list = [1, 2, 3, 4]
# it = iter(list)    # 创建迭代器对象

# while True:
#     try:
#         print(next(it))
#     except StopIteration:
#         sys.exit()

# class MyNumbers:
#   def __iter__(self):
#     self.a = 1
#     return self

#   def __next__(self):
#     x = self.a
#     self.a += 1
#     return x

# myclass = MyNumbers()
# myiter = iter(myclass)

# print(next(myiter))
# print(next(myiter))
# print(next(myiter))
# print(next(myiter))
# print(next(myiter))

# class MyNumbers:
#     def __iter__(self):
#         self.a = 1
#         return self

#     def __next__(self):
#         if self.a <= 20:
#             x = self.a
#             self.a += 1
#             return x
#         else:
#             raise StopIteration


# myclass = MyNumbers()
# myiter = iter(myclass)

# for x in myiter:
#     print(x)

# def countdown(n):
#     while n > 0:
#         yield n
#         n -= 1


# # 创建生成器对象
# generator = countdown(5)

# # 通过迭代生成器获取值
# print(next(generator))  # 输出: 5
# print(next(generator))  # 输出: 4
# print(next(generator))  # 输出: 3

# # 使用 for 循环迭代生成器
# for value in generator:
#     print(value)  # 输出: 2 1

#!/usr/bin/python3

import sys


def fibonacci(n):  # 生成器函数 - 斐波那契
    a, b, counter = 0, 1, 0
    while True:
        if (counter > n):
            return
        yield a
        a, b = b, a + b
        counter += 1


f = fibonacci(10)  # f 是一个迭代器，由生成器返回生成

while True:
    try:
        print(next(f), end=" ")
    except StopIteration:
        sys.exit()
