// 存在 错误

// 1、深度优先思想 
function dfs(obj) {
  if (typeof obj === "object") {
    if (obj === null) return null;
    if (Array.isArray(obj)) {
      return obj.map(i => bfs(i));
    }
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach(key => {
      newObj[key] = bfs(obj[key]);
    })
    return newObj;
  }
  return obj;
}

function bfsNextLine(_nextLineNodesSource, _nextLineNodes) {
  if (_nextLineNodesSource.length === 0) return;
  const nextLineNodesSource = [];
  const nextLineNodes = [];
  _nextLineNodesSource.forEach((obj, i) => {
    if (typeof obj === "object" && obj !== null) {
      if (Array.isArray(obj)) {
        const newArr = [];
        obj.map(node => {
          if (typeof node === "object" && node !== null) {
            const newNode = Array.isArray(node) ? [] : {};
            newArr.push(newNode);
            nextLineNodes.push(newNode);
            nextLineNodesSource.push(node);
          } else {
            newArr.push(node)
          }
        })
        bfsNextLine(nextLineNodesSource, nextLineNodes);
        return newArr;
      } else {
        const keys = Object.keys(obj);
        const newObj = {};
        keys.forEach(key => {
          if (typeof node === "object" && node !== null) {
            const newNode = Array.isArray(node) ? [] : {};
            newObj[key] = newNode;
            nextLineNodes.push(newNode);
            nextLineNodesSource.push(node);
          } else {
            newObj[key] = obj[key]
          }
        })
        bfsNextLine(nextLineNodesSource, nextLineNodes)
        return newObj;
      }
    }
  })
}

// 2、广度优先思想
function bfs(obj) {
  const nextLineNodesSource = [];
  const nextLineNodes = [];
  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      const newArr = [];
      obj.map(node => {
        if (typeof node === "object" && node !== null) {
          const newNode = Array.isArray(node) ? [] : {};
          newArr.push(newNode);
          nextLineNodes.push(newNode);
          nextLineNodesSource.push(node);
        } else {
          newArr.push(node)
        }
      })
      bfsNextLine(nextLineNodesSource, nextLineNodes);
      return newArr;
    } else {
      const keys = Object.keys(obj);
      const newObj = {};
      keys.forEach(key => {
        if (typeof node === "object" && node !== null) {
          const newNode = Array.isArray(node) ? [] : {};
          newObj[key] = newNode;
          nextLineNodes.push(newNode);
          nextLineNodesSource.push(node);
        } else {
          newObj[key] = obj[key]
        }
      })
      bfsNextLine(nextLineNodesSource, nextLineNodes)
      return newObj;
    }
  }
  return obj;
}

function test() {
  const obj = { a: 1, b: "chart", c: true, d: null, e: [{ ea: 1, eb: "chart", ec: true, ed: null, ee: [], ef: {} }], f: { fa: 1, fb: "chart", fc: true, fd: null, fe: [], ff: {} } }
  const dfsString = JSON.stringify(dfs(obj));
  const bfsString = JSON.stringify(bfs(obj));
  const objStringSource = JSON.stringify(obj);
  obj.f.fa = 2;
  const objStrinChange = JSON.stringify(obj);
  console.log(objStringSource === dfsString);
  console.log(objStringSource === bfsString);
  console.log(objStrinChange === dfsString);
  console.log(objStrinChange === bfsString);
}

test();