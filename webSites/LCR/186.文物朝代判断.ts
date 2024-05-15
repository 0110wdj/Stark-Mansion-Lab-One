function checkDynasty(places: number[]): boolean {
  const placesWithoutZero: number[] = []
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  let countZero = 0;
  for (const place of places) {
    if (place === 0) {
      countZero++;
    } else {
      placesWithoutZero.push(place);
      max = Math.max(max, place);
      min = Math.min(min, place);
    }
  }
  if (new Set(placesWithoutZero).size < placesWithoutZero.length) return false;
  return max - min < 5
};

console.log(checkDynasty([0, 6, 9, 0, 7]));
console.log(checkDynasty([9, 10, 4, 0, 9]));