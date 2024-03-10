const fruits = [
  [10, 50],
  [20, 120],
  [30, 150],
  [40, 210],
  [50, 240],
]

const violenceSerach = (cap = 50) => {
  const stateInit = [fruits.length - 1, cap]

  const recursion = (state: number[]): number => {
    const currentFruit = state[0]
    const capSpace = state[1]
    if (currentFruit < 0 || capSpace < 0) {
      return 0
    }

    const notSelect = recursion([currentFruit - 1, capSpace])
    const selected = (capSpace - fruits[currentFruit][0]) >= 0 ? (recursion([currentFruit - 1, capSpace - fruits[currentFruit][0]]) + fruits[currentFruit][1]) : 0

    return Math.max(notSelect, selected)
  }

  return recursion(stateInit)
}

console.log(violenceSerach());



