function iceBreakingGame(num: number, target: number): number {
  let np = num;
  let now = -1;
  const people: (number | null)[] = Array.from({ length: num }, (v, i) => i)
  // console.log(people);

  while (np > 0) {
    let i = now;
    for (let j = 0; j < target; j++) {
      i = (i + 1) % num;
      if (people[i] === null) {
        j--;
      }
    }
    people[i] = null;
    now = i;
    np--;
    // console.log(JSON.stringify(people), i);
  }
  return now;
};

console.log(1, iceBreakingGame(7, 4));
console.log(0, iceBreakingGame(12, 5));
