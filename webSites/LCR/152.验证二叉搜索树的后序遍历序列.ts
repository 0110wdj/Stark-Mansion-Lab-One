function verifyTreeOrder(postorder: number[]): boolean {
  const recur = (i: number, j: number): boolean => {
    if (i >= j) return true;

    const root = postorder[j];
    let mid = i;

    while (mid < j && postorder[mid] <= root) {
      mid++;
    }

    for (let k = mid; k < j; k++) {
      if (postorder[k] < root) return false;
    }
    
    return recur(i, mid - 1) && recur(mid, j - 1)
  }
  return recur(0, postorder.length - 1)
};

console.log(verifyTreeOrder([4, 9, 6, 5, 8]));
console.log(verifyTreeOrder([4, 6, 5, 9, 8]));
