const main = () => {
  const arr = [1, 2, 3, 4];
  const n = 3;
  const res = [];
  const cur = (index, state) => {
    if (n === state.length) {
      res.push([...state]);
      return;
    }
    if (index >= arr.length) return;
    // 存在选和不选两种情况
    cur(index + 1, [...state, arr[index]]);
    cur(index + 1, [...state]);
  }
  cur(0, [])
  console.log(res);

  return res;
}

main()