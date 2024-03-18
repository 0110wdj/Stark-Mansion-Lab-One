var a = [];
for (var i = 0; i < 10; i++) {
  a.push(
    function () {
      const m = i
      console.log('m', m);
      console.log('i', i);
    }
  );
}

for (var i = 0; i < 10; i++) {
  a[5]();
}