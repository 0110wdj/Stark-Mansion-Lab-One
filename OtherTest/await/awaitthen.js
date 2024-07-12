const test = async () => {
  const lastRes = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }).then(r => {
    return r + 1;
  }).catch(e => {
    return e;
  });
  console.log(lastRes);
  return lastRes;
};

console.log(test());