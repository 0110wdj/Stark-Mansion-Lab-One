function validNumber(s: string): boolean {

  let state: 'spac' | 'spacAfter' | 'exp' | 'num' | 'int' | 'dot' | 'symbol' = 'spac';

  let outDoor: 'dotExist'[] = []

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    if ([' ', ''].includes(c) && ['spac'].includes(state)) {
      state = 'spac'
      continue
    }
    if ([' ', ''].includes(c) && ['spacAfter', 'num', 'int', 'dot'].includes(state)) {
      state = 'spacAfter'
      continue
    }
    if (/[0-9]/.test(c) && ['spac', 'num', 'int', 'dot', 'exp', 'symbol'].includes(state)) {
      if (state === 'exp') {
        state = 'int'
      } else {
        if (state === 'int') {
          state = 'int'
        } else {
          state = 'num'
        }
      }
      continue
    }
    if (/[eE]/.test(c) && ['num', 'dot'].includes(state)) {
      state = 'exp'
      continue
    }
    if (/[.]/.test(c) && ['num', 'spac', 'symbol'].includes(state)) {
      if (state !== 'num' && !/[0-9]/.test(s.charAt(i + 1))) {
        return false
      }
      if (outDoor.includes('dotExist')) {
        return false
      }
      state = 'dot'
      outDoor.push('dotExist')
      continue
    }
    if (/[+-]/.test(c) && ['spac', 'exp'].includes(state)) {
      state = 'symbol'
      continue
    }
    return false
  }
  return ['spacAfter', 'num', 'int', 'dot'].includes(state)
};

console.log(validNumber('  +33.54e-12 '));
console.log('====');
["3. ", ".1", "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"].forEach(v => console.log(validNumber(v)));
console.log('====');
["7e57.", " -.", ".1.", " ", ".", "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].forEach(v => console.log(validNumber(v)))

