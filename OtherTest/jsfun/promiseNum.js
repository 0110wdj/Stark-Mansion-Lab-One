async function promiseNum(requests, max) {
  const res = [];
  const exe = [];

  for (let i = 0; i < requests.length; i++) {
    const req = requests[i];
    exe.push(req().then(r => {
      res[i] = r;
      return r
    }));

    if (exe.length > max) {
      await Promise.race(exe);
    }
  }

  await Promise.all(exe);
  return res;
}