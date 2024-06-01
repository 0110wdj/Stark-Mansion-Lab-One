function crackNumber(ciphertext: number): number {
  let b = 1, a = 1;
  const strArr = ciphertext.toString().split('')
  for (let i = 1; i < strArr.length; i++) {
    const cur = Number(`${strArr[i - 1]}${strArr[i]}`);
    // console.log({ a, b, c: strArr[i], cur });
    const tmp = b;
    if (cur <= 25 && cur >= 10) {
      b = b + a;
    }
    a = tmp
  }
  return b
};

console.log(crackNumber(506));
console.log(crackNumber(216612));
console.log(crackNumber(12258));
