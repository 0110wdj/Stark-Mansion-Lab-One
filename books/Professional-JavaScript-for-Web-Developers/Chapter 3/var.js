for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 0);
  })(i);
}

for (var i = 0; i < 5; i++) {
  setTimeout((j) => {
    console.log(j);
  }, 0, i); // 第三个参数 i 会传给回调
}