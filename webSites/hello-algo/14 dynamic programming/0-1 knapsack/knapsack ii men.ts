(() => {
  const fruits = [
    [10, 50],
    [20, 120],
    [30, 150],
    [40, 210],
    [50, 240],
  ]

  const cap = 50
  const men: number[][] = Array.from({ length: fruits.length }, () => Array(cap + 1).fill(-1))

  const violenceSerach = () => {
    const stateInit = [fruits.length - 1, cap]

    const recursion = (state: number[]): number => {
      const currentFruit = state[0]
      const capSpace = state[1]
      if (currentFruit < 0 || capSpace < 0) {
        return 0
      }

      if (men[currentFruit][capSpace] === -1) {
        const notSelect = recursion([currentFruit - 1, capSpace])
        if ((capSpace - fruits[currentFruit][0]) < 0) {
          return notSelect
        }
        const selected = recursion([currentFruit - 1, capSpace - fruits[currentFruit][0]]) + fruits[currentFruit][1]
        men[currentFruit][capSpace] = Math.max(notSelect, selected)
      }

      return men[currentFruit][capSpace]
    }

    return recursion(stateInit)
  }


  console.log(violenceSerach());
  // console.log(men);

})()