function goodsOrder(goods: string): string[] {
  const res: string[] = [];
  let state: string = '';
  const recur = (tar: string) => {
    if (state.length === goods.length) {
      res.push(state)
    } else {
      const used = new Map();
      for (let i = 0; i < tar.length; i++) {
        const c = tar.charAt(i);
        if (!used.has(c)) {
          used.set(c, true)
          state += c
          recur(tar.slice(0, i) + tar.slice(i + 1))
          state = state.slice(0, -1)
        }
      }
    }
  }
  recur(goods)
  return res;
};

console.log(goodsOrder("agew"));
