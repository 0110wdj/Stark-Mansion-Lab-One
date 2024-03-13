new Promise(() => {
  console.log(1);
  throw error
  console.log(2);
}).then(() => {
  console.log(3);
}, () => {
  console.log(4);
}).catch(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})

// console 1 4 6