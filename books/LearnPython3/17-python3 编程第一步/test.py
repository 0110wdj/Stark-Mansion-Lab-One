# print("Hello, world!")
# i = 256*256
# print('i 的值为：', i)
# x = 3
# y = 2
# z = x + y
# print(z)
# my_list = ['google', 'runoob', 'taobao']
# print(my_list[0])  # 输出 "google"
# print(my_list[1])  # 输出 "runoob"
# print(my_list[2])  # 输出 "taobao"
# for i in range(5):
#     print(i)
# x = 6
# if x > 10:
#     print("x 大于 10")
# else:
#     print("x 小于或等于 10")
#!/usr/bin/python3

# Fibonacci series: 斐波纳契数列
# 两个元素的总和确定了下一个数
# a, b = 0, 1
# while b < 10:
#     print(b)
#     a, b = b, a+b

# n = 10
# a, b = 0, 1
# for i in range(n):
#     print(b)
#     a, b = b, a + b

#!/usr/bin/python3

# Fibonacci series: 斐波纳契数列
# 两个元素的总和确定了下一个数
a, b = 0, 1
while b < 1000:
    print(b, end=',')
    a, b = b, a+b
