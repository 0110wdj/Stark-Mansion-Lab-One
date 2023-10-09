# #!/usr/bin/python3

# counter = 100     # 整型变量
# miles = 1000.0    # 浮点型变量
# name = "runoob"   # 字符串

# print(counter)
# print(miles)
# print(name)

# a = b = c = 1
# a1, b1, c1 = 1, 2, "runoob"
# a2, b2, c2, d2 = 20, 5.5, True, 4+3j
# print(type(a2), type(b2), type(c2), type(d2))
# a3 = 111
# print(isinstance(a, int))


# class A:
#     pass


# class B(A):
#     pass


# print(isinstance(A(), A))
# print(type(A()) == A)
# print(isinstance(B(), A))
# print(type(B()) == A)

# print(issubclass(bool, int))
# print(True == 1)
# print(False == 0)
# print(True+1)
# print(False+1)
# print(1 is True)
# print(1 is True)
# print('🍎')

# var1 = 1
# var2 = 10
# del var1, var2

# str = 'Runoob'

# print(str)          # 输出字符串
# print(str[0:-1])    # 输出第一个到倒数第二个的所有字符
# print(str[0])       # 输出字符串第一个字符
# print(str[2:5])     # 输出从第三个开始到第五个的字符
# print(str[2:])      # 输出从第三个开始的后的所有字符
# print(str * 2)      # 输出字符串两次，也可以写成 print (2 * str)
# print(str + "TEST")  # 连接字符串

# print('Ru\noob')
# print(r'Ru\noob')
# print('Ru\\noob')

# aB = True
# bB = False

# # 比较运算符
# print(2 < 3)  # True
# print(2 == 3)  # False

# # 逻辑运算符
# print(aB and bB)  # False
# print(aB or bB)  # True
# print(not aB)  # False

# # 类型转换
# print(int(aB))  # 1
# print(float(bB))  # 0.0
# print(str(aB))  # "True"

# list = ['abcd', 786, 2.23, 'runoob', 70.2]
# tinylist = [123, 'runoob']

# print(list)            # 输出完整列表
# print(list[0])         # 输出列表第一个元素
# print(list[1:3])       # 从第二个开始输出到第三个元素
# print(list[2:])        # 输出从第三个元素开始的所有元素
# print(tinylist * 2)    # 输出两次列表
# print(list + tinylist)  # 连接列表

# letters = ['r', 'u', 'n', 'o', 'o', 'b']
# print(letters[1:4:2])
# print(letters[1:5:2])
# print(letters[1:4:1])

# def reverseWords(input):

#     # 通过空格将字符串分隔符，把各个单词分隔为列表
#     inputWords = input.split(" ")

#     # 翻转字符串
#     # 假设列表 list = [1,2,3,4],
#     # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样)
#     # inputWords[-1::-1] 有三个参数
#     # 第一个参数 -1 表示最后一个元素
#     # 第二个参数为空，表示移动到列表末尾
#     # 第三个参数为步长，-1 表示逆向
#     print(inputWords)
#     inputWords = inputWords[-1::-1]
#     print(inputWords)

#     # 重新组合字符串
#     output = ' '.join(inputWords)

#     return output


# if __name__ == "__main__":
#     input = 'I like runoob'
#     rw = reverseWords(input)
#     print(rw)

#!/usr/bin/python3

# tuple = ('abcd', 786, 2.23, 'runoob', 70.2)
# tinytuple = (123, 'runoob')

# print(tuple)       # 输出完整元组
# print(tuple[0])     # 输出元组的第一个元素
# print(tuple[1:3])    # 输出从第二个元素开始到第三个元素
# print(tuple[2:])     # 输出从第三个元素开始的所有元素
# print(tinytuple * 2)   # 输出两次元组
# print(tuple + tinytuple)  # 连接元组

#!/usr/bin/python3

# sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}

# print(sites)  # 输出集合，重复的元素被自动去掉

# # 成员测试
# if 'Runoob' in sites:
#     print('Runoob 在集合中')
# else:
#     print('Runoob 不在集合中')


# # set可以进行集合运算
# a = set('abracadabra')
# b = set('alacazam')

# print(a)
# print(b)

# print(a - b)   # a 和 b 的差集

# print(a | b)   # a 和 b 的并集

# print(a & b)   # a 和 b 的交集

# print(a ^ b)   # a 和 b 中不同时存在的元素


#!/usr/bin/python3

# dict = {}
# dict['one'] = "1 - 菜鸟教程"
# dict[2] = "2 - 菜鸟工具"

# tinydict = {'name': 'runoob', 'code': 1, 'site': 'www.runoob.com'}


# print(dict['one'])    # 输出键为 'one' 的值
# print(dict[2])      # 输出键为 2 的值
# print(tinydict)     # 输出完整的字典
# print(tinydict.keys())  # 输出所有键
# print(tinydict.values())  # 输出所有值

# print(dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)]))
# print({x: x**2 for x in (2, 4, 6)})
# print(dict(Runoob=1, Google=2, Taobao=3))

# x = bytes("hello", encoding="utf-8")
# print(x)

# x = b"hello"
# y = x[1:3]  # 切片操作，得到 b"el"
# z = x + b"world"  # 拼接操作，得到 b"helloworld"
# print(x, y, z)

x = b"hello"
if x[0] == ord("h"):
    print("The first element is 'h'")
print(x[0])
print(ord('h'))
print(ord('a'))
