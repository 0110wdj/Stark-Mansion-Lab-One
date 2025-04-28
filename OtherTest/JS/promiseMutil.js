const result = [];
const promises = [];

let next = 0;
let len = 0;
const MAX_LEN = 6;

while (next < promises.length && len < MAX_LEN) {
  const currentIndex = next;  // 保存当前 next 值
  promises[next++]().then(res => {
    result[currentIndex] = res;  // 用保存的 currentIndex 来保证正确的顺序
    len--;  // 异步任务完成，减少 len
  });
  len++;  // 开始一个新的任务，增加 len
}