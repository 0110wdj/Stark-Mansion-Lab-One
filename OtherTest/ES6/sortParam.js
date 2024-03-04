const arr = [
  {
    name: 'a',
    meta: { sort: 2 },
  },
  {
    name: 'b',
    meta: { sort: 1 }
  },
  {
    name: 'c',
    meta: { sort: 3 }
  },
]

arr.sort((a, b) => {
  console.log({ a, b });
  return a.meta.sort - b.meta.sort
})
console.log(arr);