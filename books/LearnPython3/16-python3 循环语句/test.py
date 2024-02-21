# #!/usr/bin/env python3

# n = 100

# sum = 0
# counter = 1
# while counter <= n:
#     sum = sum + counter
#     counter += 1

# print("1 到 %d 之和为: %d" % (n, sum))


# var = 1
# while var == 1:  # 表达式永远为 true
#     num = int(input("输入一个数字  :"))
#     print("你输入的数字是: ", num)

# print("Good bye!")


# count = 0
# while count < 5:
#     print(count, " 小于 5")
#     count = count + 1
# else:
#     print(count, " 大于或等于 5")

# flag = 1

# while (flag):
#     print('欢迎访问菜鸟教程!')

# print("Good bye!")

# sites = ["Baidu", "Google", "Runoob", "Taobao"]
# for site in sites:
#     print(site)

# word = 'runoob'

# for letter in word:
#     print(letter)

# for number in range(1, 6):
#     print(number)

# for x in range(6):
#     print(x)
# else:
#     print("Finally finished!")

# sites = ["Baidu", "Google", "Runoob", "Taobao"]
# for site in sites:
#     if site == "Runoob":
#         print("菜鸟教程!")
#         break
#     print("循环数据 " + site)
# else:
#     print("没有循环数据!")
# print("完成循环!")

# for i in range(0, 10, 3):
#     print(i)

# n = 5
# while n > 0:
#     n -= 1
#     if n == 2:
#         break
#     print(n)
# print('循环结束。')


# n = 5
# while n > 0:
#     n -= 1
#     if n == 2:
#         continue
#     print(n)
# print('循环结束。')

# for letter in 'Runoob':     # 第一个实例
#     if letter == 'b':
#         break
#     print('当前字母为 :', letter)

# var = 10                    # 第二个实例
# while var > 0:
#     print('当前变量值为 :', var)
#     var = var - 1
#     if var == 5:
#         break

# print("Good bye!")

# for letter in 'Runoob':     # 第一个实例
#     if letter == 'o':        # 字母为 o 时跳过输出
#         continue
#     print('当前字母 :', letter)

# var = 10                    # 第二个实例
# while var > 0:
#     var = var - 1
#     if var == 5:             # 变量为 5 时跳过输出
#         continue
#     print('当前变量值 :', var)
# print("Good bye!")

# for n in range(2, 10):
#     for x in range(2, n):
#         if n % x == 0:
#             print(n, '等于', x, '*', n//x)
#             break
#     else:
#         # 循环中没有找到元素
#         print(n, ' 是质数')

for letter in 'Runoob':
    if letter == 'o':
        pass
        print('执行 pass 块')
    print('当前字母 :', letter)

print("Good bye!")
