# set1 = {1, 2, 3, 4}            # 直接使用大括号创建集合
# set2 = set([4, 5, 6, 7])      # 使用 set() 函数从列表创建集合

# basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
# print(basket)           # 这里演示的是去重功能
# print('orange' in basket)
# # True
# print('crabgrass' in basket)
# # False

# # 下面展示两个集合间的运算.
# ...
# a = set('abracadabra')
# b = set('alacazam')
# print(a)
# {'a', 'r', 'b', 'c', 'd'}
# print(a - b)             # 集合a中包含而集合b中不包含的元素
# {'r', 'd', 'b'}
# print(a | b)             # 集合a或b中包含的所有元素
# {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
# print(a & b)             # 集合a和b中都包含了的元素
# {'a', 'c'}
# print(a ^ b)            # 不同时包含于a和b的元素
# {'r', 'd', 'b', 'm', 'z', 'l'}

# a = {x for x in 'abracadabra' if x not in 'abc'}
# print(a)

# thisset = set(("Google", "Runoob", "Taobao"))
# thisset.add("Facebook")
# print(thisset)
# {'Taobao', 'Facebook', 'Google', 'Runoob'}

# thisset = set(("Google", "Runoob", "Taobao"))
# thisset.update({1, 3})
# print(thisset)
# {1, 3, 'Google', 'Taobao', 'Runoob'}
# thisset.update([1, 4], [5, 6])
# print(thisset)
# {1, 3, 4, 5, 6, 'Google', 'Taobao', 'Runoob'}

# thisset = set(("Google", "Runoob", "Taobao"))
# thisset.remove("Taobao")
# print(thisset)
# {'Google', 'Runoob'}
# thisset.remove("Facebook")  # 不存在会发生错误
# # Traceback (most recent call last):
# #  File "<stdin>", line 1, in <module>
# # KeyError: 'Facebook'

# thisset = set(("Google", "Runoob", "Taobao"))
# thisset.discard("Facebook")  # 不存在不会发生错误
# print(thisset)
# {'Taobao', 'Google', 'Runoob'}

# thisset = set(("Google", "Runoob", "Taobao", "Facebook"))
# x = thisset.pop()

# print(x)

# thisset = set(("Google", "Runoob", "Taobao"))
# print(len(thisset))
# 3

# thisset = set(("Google", "Runoob", "Taobao"))
# thisset.clear()
# print(thisset)
# set()

thisset = set(("Google", "Runoob", "Taobao"))
print("Runoob" in thisset)
True
print("Facebook" in thisset)
False
