import(/* webpackChunkName: "sum" */ './sum').then(m => {
  console.log(m.default(1, 2))
})