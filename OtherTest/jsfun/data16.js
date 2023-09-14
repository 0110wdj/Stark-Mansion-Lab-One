const data = [
  {}, {}, {
    "type": 3,
    "success": true,
    "data": [4, 20, 18, 35, 82, 82, 83, 84]
  }]


const arr = [];

data.forEach((item, index) => {
  if ([2, 3].includes(item.type) && item?.data?.length > 0) {
    /* 用 -index 表示这个包的开始, 及其序号 */
    arr.push(-index);
    /* 每 16 个数字作为一个数组, 头部添加序号 */
    const arr16 = [];
    item.data.forEach((num, i, data) => {
      if ((i + 1) % 16 === 0) {
        arr.push([(i + 1) / 16 - 1, index, ...arr16, num]);
        arr16.length = 0; // 清空
      } else {
        arr16.push(num);
        if (i === data.length - 1) {
          arr.push([Math.floor((i + 1) / 16), index, ...arr16]);
          arr16.length = 0; // 清空
        } else {
          // arr16.push(num); // bug:应该先置入arr16，再判断 arr16 置入 arr
        }
      }
    });
  }
});

console.log({ arr: JSON.stringify(arr) });

const arrGpt = []

data.forEach((item, index) => {
  if ([2, 3].includes(item.type) && item?.data?.length > 0) {
    /* 用 -index 表示这个包的开始, 及其序号 */
    arrGpt.push(-index);
    /* 每 16 个数字作为一个数组, 头部添加序号 */
    const arr16 = [];
    item.data.forEach((num, i) => {
      arr16.push(num);
      if (arr16.length === 16 || i === item.data.length - 1) {
        arrGpt.push([Math.floor(i / 16), index, ...arr16]);
        arr16.length = 0; // 清空
      }
    });
  }
});

console.log({ arrGpt: JSON.stringify(arrGpt) });