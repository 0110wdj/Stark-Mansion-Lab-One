# s = 'Hello, Runoob'

# for x in range(1, 11):
#     print(repr(x).rjust(2), repr(x*x).rjust(3), end=' ')
#     # 注意前一行 'end' 的使用
#     print(repr(x*x*x).rjust(4))

# for x in range(1, 11):
#     print('{0:2d} {1:3d} {2:4d}'.format(x, x*x, x*x*x))

# print('{}网址： "{}!"'.format('菜鸟教程', 'www.runoob.com'))
# print('{0} 和 {1}'.format('Google', 'Runoob'))
# print('{1} 和 {0}'.format('Google', 'Runoob'))
# print('{name}网址： {site}'.format(name='菜鸟教程', site='www.runoob.com'))

# print('站点列表 {0}, {1}, 和 {other}。'.format('Google', 'Runoob', other='Taobao'))

# import math
# print('常量 PI 的值近似为： {}。'.format(math.pi))
# # 常量 PI 的值近似为： 3.141592653589793。
# print('常量 PI 的值近似为： {!r}。'.format(math.pi))
# # 常量 PI 的值近似为： 3.141592653589793。

# print('常量 PI 的值近似为 {0:.3f}。'.format(math.pi))

# table = {'Google': 1, 'Runoob': 2, 'Taobao': 3}

# for name, number in table.items():
#     print('{0:10} ==> {1:10d}'.format(name, number))

# print(
#     'Runoob: {0[Runoob]:d}; Google: {0[Google]:d}; Taobao: {0[Taobao]:d}'.format(table))
# print(
#     'Runoob: {Runoob:d}; Google: {Google:d}; Taobao: {Taobao:d}'.format(**table))

# print('常量 PI 的值近似为：%5.3f。' % math.pi)

# str = input("请输入：")
# print("你输入的内容是: ", str)
