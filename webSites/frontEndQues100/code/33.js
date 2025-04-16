var b = 10;
(function b() {
  b = 20;
  console.log(b);//[Function: b]
})();

(() => {
  b = 20;
  console.log(b);//20
})();