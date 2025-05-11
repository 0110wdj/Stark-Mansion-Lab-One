// 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

function deepClone(value, hash = new WeakMap()) {
    // 处理 null 和基本类型
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // 处理 Date 类型
    if (value instanceof Date) {
        return new Date(value);
    }

    // 处理 RegExp 类型
    if (value instanceof RegExp) {
        return new RegExp(value);
    }

    // 处理循环引用
    if (hash.has(value)) {
        return hash.get(value);
    }

    // 获取所有属性，包括 Symbol 类型
    const allKeys = Reflect.ownKeys(value);
    const result = Array.isArray(value) ? [] : {};

    // 将当前对象存入 hash 表
    hash.set(value, result);

    // 递归处理所有属性
    for (const key of allKeys) {
        result[key] = deepClone(value[key], hash);
    }

    return result;
}

// 测试代码
const obj = {
    a: 1,
    b: 'string',
    c: [1, 2, 3],
    d: { x: 1, y: 2 },
    e: new Date(),
    f: /hello/g,
    g: Symbol('test'),
    h: null,
    i: undefined
};

// 创建循环引用
obj.j = obj;

const clonedObj = deepClone(obj);
console.log(clonedObj);

