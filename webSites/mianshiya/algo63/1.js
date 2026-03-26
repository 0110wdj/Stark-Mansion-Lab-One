function solve(arr, k) {
  const n = arr.length;

  const badMap = new Map(); // value -> index
  let outsideGoodPos = -1;

  // ---------- 初始化窗口 ----------
  for (let i = 0; i < k; i++) {
    if (arr[i] > k) {
      badMap.set(arr[i], i);
    }
  }

  if (badMap.size === 0) {
    return ["YES", 0];
  }

  // ---------- 滑动窗口 ----------
  for (let l = 0, r = k; ; l++, r++) {

    // 窗口内恰好 0 个坏元素，直接通过
    if (badMap.size === 0) {
      return ["YES", 0]
    }

    // 窗口内恰好 1 个坏元素，一定能找到窗口外的好元素
    if (badMap.size === 1) {
      const [[_, badIndex]] = badMap;

      // 情况 1：左侧已有好元素
      if (outsideGoodPos !== -1) {
        return ["YES", outsideGoodPos, badIndex];
      }

      // 情况 2：只能去右侧找好元素
      for (let i = r; i < n; i++) {
        if (arr[i] <= k) {
          return ["YES", badIndex, i];
        }
      }
    }

    // 本次窗口失败，开始滑动
    if (r === n) return ["NO"]

    // ---------- 左端移出 ----------
    if (arr[l] > k) {
      badMap.delete(arr[l]);
    } else {
      // 窗口左侧有两个好元素，直接失败
      if (outsideGoodPos !== -1) return ["NO"];
      outsideGoodPos = l;
    }

    // ---------- 右端加入 ----------
    if (arr[r] > k) {
      badMap.set(arr[r], r);
    }
  }

  return ["NO"];
}