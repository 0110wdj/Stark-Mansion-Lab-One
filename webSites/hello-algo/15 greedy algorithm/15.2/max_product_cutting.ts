(() => {
  const max_product_cutting = (n: number) => {
    if (n <= 3) {
      return 1 * (n - 1)
    }
    const last = n % 3
    const count = Math.floor(n / 3)
    switch (last) {
      case 0:
        return 3 ** count
      case 1:
        return 3 ** (count - 1) * 2 * 2
      case 2:
        return 3 ** count * 2
      default:
        return -1
    }
  }
  console.log(max_product_cutting(1));
  console.log(max_product_cutting(2));
  console.log(max_product_cutting(3));
  console.log(max_product_cutting(4));
  console.log(max_product_cutting(5));
  console.log(max_product_cutting(6));
  console.log(max_product_cutting(7));
  console.log(max_product_cutting(14));
})()