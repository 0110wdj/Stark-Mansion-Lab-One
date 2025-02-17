// 根据预设的数据特点，从大到小的插入排序效率最高
function insertNumber(array, number) {
  if (array.length === 0) {
    array.push(number);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    if (number > element) {
      array.splice(i + 1, 0, number);
      return;
    }
    if (element === number) {
      return;
    }
  }
}

function flatArrCurrentDeep(cur, res) {
  if (Array.isArray(cur)) {
    cur.forEach(cur => flatArrCurrentDeep(cur, res));
  } else {
    insertNumber(res, cur)
  }
}

function flatArr(arr) {
  const res = [];
  flatArrCurrentDeep(arr, res);
  return res;
}

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
console.log(flatArr(arr));
