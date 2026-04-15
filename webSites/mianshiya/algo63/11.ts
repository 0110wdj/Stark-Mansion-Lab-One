

function findMinPower(icePower: number[]) {
  let leftMinPower = Infinity, rightMinPower = Infinity;
  let isLeftCheck = true;
  for (let i = 0; i < icePower.length; i++) {
    const ice = icePower[i];
    if (ice === -1) {
      if (i === 0) { leftMinPower = 0; }
      if (i === icePower.length - 1) { rightMinPower = 0; }
      isLeftCheck = false;
      continue;
    }
    if (isLeftCheck) {
      leftMinPower = Math.min(leftMinPower, ice);
    } else {
      rightMinPower = Math.min(rightMinPower, ice);
    }
  }
  return leftMinPower + rightMinPower;
}

function test() {
  const icePower = [7, -1, 6, 2, 5];
  console.log(findMinPower(icePower));
}
test();
