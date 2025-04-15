// 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];

const arr3 = [...arr1];
for (let i = 0; i < arr2.length; i++) {
  const cur = arr2[i];
  let flag = false;
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j].startsWith(cur.charAt(0))) {
      flag = true;
    } else {
      if (flag) {
        arr3.push(cur);
        break;
      }
    }
    if (j === arr1.length - 1) {
      arr3.push(cur);
    }
  }
}

console.log(arr3);
