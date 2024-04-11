const deepClone = <T>(tar: T): T => {
  if (tar === null || typeof tar !== 'object') {
    return tar
  }
  if (Array.isArray(tar)) {
    const res = [] as T[];
    tar.forEach(el => {
      res.push(deepClone(el))
    })
    return res as T
  }
  const res: T = {} as T;
  Object.keys(tar).forEach((key) => {
    console.log({ key });
    res[key as keyof T] = deepClone(tar[key as keyof T])
  })
  return res as T
}

console.log(deepClone({ a: 1, b: { c: 2 }, d: [{ f: 3 }, 4, [5]] }));
