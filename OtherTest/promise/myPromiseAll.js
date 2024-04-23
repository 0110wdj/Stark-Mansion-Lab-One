const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0
    promises.forEach((p, i) => {
      p.then(re => {
        result[i] = re;
        count++;
        if (count === promises.length) {
          resolve(result)
        }
      }, re => {
        result[i] = re;
        reject(result)
      })
    });
  })
}

let p1 = new Promise((re, rj) => {
  setTimeout(() => {
    re('su')
  }, 100)
})

let p2 = new Promise((re, rj) => {
  setTimeout(() => {
    rj('fa')
  }, 200)
})

myPromiseAll([p1, p2]).then(
  re => {
    console.log(re);
  },
  rj => {
    console.log(rj);
  },
)