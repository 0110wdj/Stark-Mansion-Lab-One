// let a = 1;
// (function () {
//   console.log(a);//undefined
//   console.log(this.a);//undefined
//   var a = '2';
//   console.log(a + this.a);//2undefined
// })();


let a = 1;
; (function () {
  var a;
  console.log(a) //undefined
  console.log(globalThis.a) //undefined
  a = "2"
  console.log(a + globalThis.a) //2undefined
})();