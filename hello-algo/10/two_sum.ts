const twoSum = (arr: number[], tar: number): number[] => {
  let tarMap: Map<number, number> = new Map()

  for (let i = 0; i < arr.length; i++) {
    let tarIndex = tarMap.get(tar - arr[i])
    if (tarIndex !== undefined) {
      return [i, tarIndex]
    } else {
      tarMap.set(arr[i], i)
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 13));
