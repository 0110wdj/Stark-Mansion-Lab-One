const findStepSpace = (source = 'bag', target = 'pack'): number => {
  const dpLine = Array.from({ length: target.length + 1 }, (v, i) => i)
  let leftRight = 0

  for (let i = 1; i <= source.length; i++) {
    for (let j = 0; j <= target.length; j++) {
      if (j === 0) {
        leftRight = dpLine[0]
        dpLine[0] = i
      } else {
        const tmp = dpLine[j]
        if (source.charAt(i - 1) === target.charAt(j - 1)) {
          dpLine[j] = leftRight
        } else {
          dpLine[j] = Math.min(dpLine[j - 1], dpLine[j], leftRight) + 1
        }
        leftRight = tmp
      }
    }
    console.log(dpLine);
  }



  return dpLine[dpLine.length - 1]
}

console.log(findStepSpace());
