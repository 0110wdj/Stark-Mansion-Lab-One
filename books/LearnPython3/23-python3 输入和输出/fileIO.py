path = "./foo.txt"

# f = open(path, "w")
# f.write("Python 是一个非常好的语言。\n是的，的确非常好!!\n")
# # 关闭打开的文件
# f.close()

# f = open(path, "r")
# str = f.read()
# print(str)
# # 关闭打开的文件
# f.close()

# f = open(path, "r")
# str = f.readline()
# print(str)
# print('---')
# str = f.readline()
# print(str)
# # 关闭打开的文件
# f.close()

# f = open(path, "r")
# str = f.readlines()
# print(str)
# # 关闭打开的文件
# f.close()

# f = open(path, "r")
# for line in f:
#     print(line, end='')
# # 关闭打开的文件
# f.close()

# f = open(path, "w")
# num = f.write("Python 是一个非常好的语言。\n是的，的确非常好!!\n")
# print(num)
# # 关闭打开的文件
# f.close()

# f = open(path, "w")
# value = ('www.runoob.com', 14)
# s = str(value)
# f.write(s)
# # 关闭打开的文件
# f.close()

# f = open(path, 'rb+')
# res = f.write(b'0123456789abcdef')
# print(res)
# res = f.seek(5)
# print(res)
# res = f.read(1)
# print(res)
# res = f.seek(-3, 2)
# print(res)
# res = f.read(1)
# print(res)

with open(path, 'r') as f:
    read_data = f.read()
    print(read_data)
res = f.closed
print(res)
