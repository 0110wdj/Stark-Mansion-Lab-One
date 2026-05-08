function StatPortRates(portRates) {
  if (portRates.length === 1) return [0];
  const resArr = [];

  for (let i = 0; i < portRates.length; i++) {
    if (i === portRates.length - 1) {
      resArr[i] = 0;
    }
    let nextRateMunite = 0;
    const curRate = portRates[i];
    for (let j = i + 1; j < portRates.length; j++) {
      const nextRate = portRates[j];
      if (nextRate > curRate) {
        nextRateMunite = j - i;
        break;
      }
    }
    resArr[i] = nextRateMunite;
  }

  return resArr;
}

console.log(StatPortRates([730,740,750,710,690,720,760,730]))
