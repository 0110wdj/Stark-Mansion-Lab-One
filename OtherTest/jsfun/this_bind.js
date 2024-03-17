var a = 1
function get() {
  const a = 2
  return () => { console.log(a); }
}
const obj = {
  a: 3
}
const getA = get();
getA()//2
obj.getA = get();
obj.getA()//2
const getBind = get.bind(obj)()
getBind()//2