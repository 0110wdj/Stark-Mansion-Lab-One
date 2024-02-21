import keyword

中文 = 'Chinese'
print(中文)

print(keyword.kwlist)

# 第一个注释
print("Hello, Python!")  # 第二个注释

# 第一个注释
# 第二个注释

'''
第三注释
第四注释
'''

a = """
第五注释
第六注释
"""
print("Hello, Python!")
print(a)

b = '23234343'
'sdewwwqwrwefdfsdfe'
print(b)


if (1+3 > 2):
    print("True")
    print("False")
else:
    print("False")

item_one = 1
item_two = 2
item_three = 3
total = item_one + \
    item_two + \
    item_three
print(total)

totalList = ['item_one', 'item_two', 'item_three', 'item_four', 'item_five']
print(totalList)

intTest = 1
boolTest = True
boolTestF = False
floatTest = 1.23
floatTestE = 3E-2
complexTest = 1 + 2j
complexTestF = 1.1 + 2.2j
print(intTest, boolTest, boolTestF, floatTest,
      floatTestE, complexTest, complexTestF)

strr = r'test\n'
print(strr)

word = '字符串'
sentence = "这是一个句子。"
paragraph = """这是一个段落，
可以由多行组成"""

print(word, sentence, paragraph)


str = '123456789'

print(str)                 # 输出字符串
print(str[0:-1])           # 输出第一个到倒数第二个的所有字符
print(str[0])              # 输出字符串第一个字符
print(str[2:5])            # 输出从第三个开始到第六个的字符（不包含）
print(str[2:])             # 输出从第三个开始后的所有字符
print(str[1:5:2])          # 输出从第二个开始到第五个且每隔一个的字符（步长为2）
print(str * 2)             # 输出字符串两次
print(str + '你好')         # 连接字符串

print('------------------------------')

print('hello\nrunoob')      # 使用反斜杠(\)+n转义特殊字符
print(r'hello\nrunoob')     # 在字符串前面添加一个 r，表示原始字符串，不会发生转义

input("\n\n按下 enter 键后退出。")