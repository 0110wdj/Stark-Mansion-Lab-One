const cache = new Map()

const deepClone = <T>(tar: T): T => {
  if (tar === null || typeof tar !== 'object') {
    return tar
  }

  if (cache.has(tar)) {
    return cache.get(tar);
  }

  if (Array.isArray(tar)) {
    const res = [] as T[];
    cache.set(tar, res);
    tar.forEach(el => {
      res.push(deepClone(el))
    })
    return res as T
  }
  const res: T = {} as T;
  cache.set(tar, res);
  Object.keys(tar).forEach((key) => {
    res[key as keyof T] = deepClone(tar[key as keyof T])
  })
  return res as T
}

console.log(deepClone({ a: 1, b: { c: 2 }, d: [{ f: 3 }, 4, [5]] }));
