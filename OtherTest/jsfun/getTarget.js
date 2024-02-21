
const getTarget = (obj = { a: { b: { c: 2 } } }, path = 'a.b[c]', defVal = 3) => {
  // 1
  // return eval(`obj.${path.replaceAll('[', '.').replaceAll(']', '')}`)

  // 2
  const stack = []
  let currentObj = obj

  for (let chart of ('.' + path).split('')) {
    switch (chart) {
      case '.':
      case '[':
        stack.push(chart)
        break;
      case ']':
        currentObj = currentObj[stack.pop()]
        stack.pop()
        break;
      default:
        if (stack.at(-1) === '.') {
          currentObj = currentObj[chart]
          stack.pop()
        } else {
          stack.push(chart)
        }
        break;
    }
  }
  return currentObj || defVal
}

console.log(getTarget());

