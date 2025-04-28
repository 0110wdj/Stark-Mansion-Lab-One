const queue = [];
const result = [];
const promises = [];

let next = 0;
let len = 0;
const MAX_LEN = 6;

while (next < promises.length && len < MAX_LEN) {
  promises[next++]().then((res => {
    result[next] = res;
    len--;
  }))
  len++;
}