function numFormat(num) {
  let int = Math.floor(num);
  const float = num - int;
  const res = [];
  do {
    const elm = int % 1000;
    int = (int - elm) / 1000;
    res.unshift(elm);
  } while (int > 0);
  res[res.length - 1] += float;
  return res.join(',')
}

console.log(numFormat(19351235.235767));
console.log(numFormat(0.235767));
console.log(numFormat(0));
console.log(numFormat(193));
console.log(numFormat(1393));

// => 结果：19,351,235.235767
