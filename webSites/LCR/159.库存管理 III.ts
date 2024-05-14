function inventoryManagement(stock: number[], cnt: number): number[] {
  return stock.sort((a, b) => a - b).slice(0, cnt)
};

console.log(inventoryManagement([2, 5, 7, 4], 1));
console.log(inventoryManagement([0, 2, 3, 6], 2));
