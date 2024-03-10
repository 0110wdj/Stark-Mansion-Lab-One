(() => {
  const fruits = [
    [10, 50],
    [20, 120],
    [30, 150],
    [40, 210],
    [50, 240],
  ]

  const fractional_knapsack = (cap = 50) => {
    const fruits_sort = fruits.sort((b, a) => a[1] / a[0] - b[1] / b[0])
    console.log(fruits_sort);
    let residue_cap = 50
    let val_sum = 0
    for (let i = 0; i < fruits_sort.length; i++) {
      if (fruits_sort[i][0] > residue_cap) {
        const part_fruit_val = residue_cap / fruits_sort[i][0] * fruits_sort[i][1]
        residue_cap = 0
        val_sum += part_fruit_val
        break
      } else {
        residue_cap -= fruits_sort[i][0]
        val_sum += fruits_sort[i][1]
      }
    }
    return val_sum
  }

  console.log(fractional_knapsack());

})()