counter = 100  # 赋值整型变量
miles = 1000.0  # 浮点型
name = "John"  # 字符串

print(counter)
print(miles)
print(name)

a = b = c = 1
a1, b1, c1 = 1, 2, "john"
print(a, b, c, a1, b1, c1)

var1 = 1
var2 = 10
print(var1, var2)
del var1, var2 # 之后 print(var1, var2) 报错

s = "a1a2···an"   # n>=0
print(s[1:5])
str = 'Hello World!'
print(str)          # 输出完整字符串
print(str[0])       # 输出字符串中的第一个字符
print(str[2:5])     # 输出字符串中第三个至第六个之间的字符串
print(str[2:])      # 输出从第三个字符开始的字符串
print(str * 2)      # 输出字符串两次
print(str + "TEST") # 输出连接的字符串

list = ['runoob', 786, 2.23, 'john', 70.2]
tinylist = [123, 'john']

print(list)               # 输出完整列表
print(list[0])            # 输出列表的第一个元素
print(list[1:3])          # 输出第二个至第三个元素
print(list[2:])           # 输出从第三个开始至列表末尾的所有元素
print(tinylist * 2)       # 输出列表两次
print(list + tinylist)    # 打印组合的列表

tuple = ('runoob', 786, 2.23, 'john', 70.2)
tinytuple = (123, 'john')

print(tuple)              # 输出完整元组
print(tuple[0])           # 输出元组的第一个元素
print(tuple[1:3])         # 输出第二个至第四个（不包含）的元素
print(tuple[2:])          # 输出从第三个开始至列表末尾的所有元素
print(tinytuple * 2)      # 输出元组两次
print(tuple + tinytuple)  # 打印组合的元组

dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tinydict = {'name': 'runoob', 'code': 6734, 'dept': 'sales'}


print(dict['one'])          # 输出键为'one' 的值
print(dict[2])              # 输出键为 2 的值
print(tinydict)             # 输出完整的字典
print(tinydict.keys())      # 输出所有键
print(tinydict.values())    # 输出所有值
