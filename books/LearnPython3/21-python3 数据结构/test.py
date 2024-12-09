# a = [66.25, 333, 333, 1, 1234.5]
# # print(a.count(333), a.count(66.25), a.count('x'))
# a.insert(2, -1)
# a.append(333)
# # print(a)
# [66.25, 333, -1, 333, 1, 1234.5, 333]
# # print(a.index(333))
# a.remove(333)
# # print(a)
# [66.25, -1, 333, 1, 1234.5, 333]
# a.reverse()
# # print(a)
# [333, 1234.5, 1, 333, -1, 66.25]
# a.sort()
# # print(a)
# [-1, 1, 66.25, 333, 333, 1234.5]

# stack = [3, 4, 5]
# stack.append(6)
# stack.append(7)
# print(stack)
# [3, 4, 5, 6, 7]
# p = stack.pop()
# print(p)
# print(stack)
# [3, 4, 5, 6]
# stack.pop()
# 6
# stack.pop()
# 5
# print(stack)
# [3, 4]

# from collections import deque
# queue = deque(["Eric", "John", "Michael"])
# queue.append("Terry")      # Terry arrives
# queue.append("Graham")     # Graham arrives
# print(queue.popleft())         # The first to arrive now leaves
# 'Eric'
# print(queue.popleft())         # The second to arrive now leaves
# 'John'
# print(queue)              # Remaining queue in order of arrival
# deque(['Michael', 'Terry', 'Graham'])

# vec = [2, 4, 6]
# arr = [3*x for x in vec]
# print(arr)
# [6, 12, 18]
# arr2 = [[x, x**2] for x in vec]
# print(arr2)

# freshfruit = [' banana', ' loganberry ', 'passion fruit ']
# res = [weapon.strip() for weapon in freshfruit]
# print(res)
# ['banana', 'loganberry', 'passion fruit']

# vec = [1, 2, 3]
# a = [3*x for x in vec if x > 3]
# b = [3*x for x in vec if x < 2]
# print(a, b)

# vec1 = [2, 4, 6]
# vec2 = [4, 3, -9]
# a = [x*y for x in vec1 for y in vec2]
# print(a)
# [8, 6, -18, 16, 12, -36, 24, 18, -54]
# b = [x+y for x in vec1 for y in vec2]
# print(b)
# [6, 5, -7, 8, 7, -5, 10, 9, -3]
# c = [vec1[i]*vec2[i] for i in range(len(vec1))]
# print(c)
# [8, 12, -54]

# m = [str(round(355/113, i)) for i in range(1, 6)]
# print(m)

# matrix = [
#     [1, 2, 3, 4],
#     [5, 6, 7, 8],
#     [9, 10, 11, 12],
# ]
# # r = [[row[i] for row in matrix] for i in range(4)]
# # print(r)

# # transposed = []
# # for i in range(4):
# #     transposed.append([row[i] for row in matrix])
# # print(transposed)

# transposed = []
# for i in range(4):
#     # the following 3 lines implement the nested listcomp
#     transposed_row = []
#     for row in matrix:
#         transposed_row.append(row[i])
#     transposed.append(transposed_row)
# print(transposed)

# a = [-1, 1, 66.25, 333, 333, 1234.5]
# del a[0]
# print(a)
# [1, 66.25, 333, 333, 1234.5]
# del a[2:4]
# print(a)
# [1, 66.25, 1234.5]
# del a[:]
# print(a)
# []

# t = 12345, 54321, 'hello!'
# print(t[0])
# 12345
# print(t)
# (12345, 54321, 'hello!')
# # Tuples may be nested:
# u = t, (1, 2, 3, 4, 5)
# print(u)
# ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))

# basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
# print(basket)           # 删除重复的
# {'orange', 'banana', 'pear', 'apple'}
# print('orange' in basket)  # 检测成员
# True
# print('crabgrass' in basket)
# False

# # 以下演示了两个集合的操作
# a = set('abracadabra')
# b = set('alacazam')
# print(a)                 # a 中唯一的字母
# {'a', 'r', 'b', 'c', 'd'}
# print(a - b)               # 在 a 中的字母，但不在 b 中
# {'r', 'd', 'b'}
# print(a | b)              # 在 a 或 b 中的字母
# {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
# print(a & b)              # 在 a 和 b 中都有的字母
# {'a', 'c'}
# print(a ^ b)              # 在 a 或 b 中的字母，但不同时在 a 和 b 中
# {'r', 'd', 'b', 'm', 'z', 'l'}

# a = {x for x in 'abracadabra' if x not in 'abc'}
# print(a)

# tel = {'jack': 4098, 'sape': 4139}
# tel['guido'] = 4127
# print(tel)
# {'sape': 4139, 'guido': 4127, 'jack': 4098}

# print(tel['jack'])
# 4098
# del tel['sape']
# tel['irv'] = 4127
# print(tel)
# {'guido': 4127, 'irv': 4127, 'jack': 4098}

# print(list(tel.keys()))
# ['irv', 'guido', 'jack']

# print(list(sorted(tel.keys())))
# ['guido', 'irv', 'jack']

# # print(sorted('guido' in tel))
# # True

# # sorted('jack' not in tel)
# # False

# a = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
# print(a)

# b = {x: x**2 for x in (2, 4, 6)}
# print(b)

# knights = {'gallahad': 'the pure', 'robin': 'the brave'}
# for k, v in knights.items():
#     print(k, v)
# for i, v in enumerate(['tic', 'tac', 'toe']):
#     print(i, v)

# questions = ['name', 'quest', 'favorite color']
# answers = ['lancelot', 'the holy grail', 'blue']
# for q, a in zip(questions, answers):
#     print('What is your {0}?  It is {1}.'.format(q, a))

# for i in reversed(range(1, 10, 2)):
#     print(i)

basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for f in sorted(set(basket)):
    print(f)
