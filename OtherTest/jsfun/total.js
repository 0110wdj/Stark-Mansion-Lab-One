const getChildren = (arr) => {
  return arr.cases ?? arr.packets ?? arr.fields ?? arr.children ?? []
}

const calTotal = (arr) => {
  if (arr.picketed_state) {
    return [arr.test_case_statistics.extended_count, arr.test_case_statistics.primary_count, arr.test_case_statistics.secondary_count]
  }
  const res = [0, 0, 0]
  arr.getChildren().forEach((child) => {
    const childRes = calTotal(child)
    res[0] += childRes[0]
    res[1] += childRes[1]
    res[2] += childRes[2]
  })
  return res
}