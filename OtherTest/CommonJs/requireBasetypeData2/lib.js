var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter() {
    return counter
  },
  incCounter
}