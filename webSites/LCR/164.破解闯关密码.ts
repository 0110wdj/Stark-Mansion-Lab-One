function crackPassword(password: number[]): string {
  return password.sort((a, b) => +(`${a}${b}`) - +(`${b}${a}`)).join('');
};

console.log(crackPassword([0, 3, 30, 34, 5, 9]));

