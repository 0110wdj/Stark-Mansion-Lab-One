const mid = () => {
  const arr = [];
  const publicAll = (arg) => {
    for (const obj of arr) {
      obj.recive(arg)
    }
  }

  const registryReader = (obj) => {
    reader.push(obj)
  }

  const registryPublicer = (obj) => {
    publicer.push(obj)
    const thisObj = obj;
    obj.public = () => {
      const res = Object.prototype.call(thisObj, obj.public)
      publicAll(res)
    }
  }

  return {
    registryReader,
    registryPublicer,
  }
}

const r1 = {
  recive: (arg) => {
    console.log('r1', arg);
  }
}

const r2 = {
  recive: (arg) => {
    console.log('r2', arg);
  }
}

const p1 = {
  public: () => {
    return 'p1 public something'
  }
}

mid.registryReader(r1)
mid.registryReader(r2)
mid.registryPublicer(p1)

p1.public()