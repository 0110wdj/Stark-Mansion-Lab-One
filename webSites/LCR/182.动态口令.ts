function dynamicPassword(password: string, target: number): string {
  const left = password.slice(0, target)
  const right = password.slice(target)
  return right + left
};

console.log("r1tyC0d3s3cu==>", dynamicPassword("s3cur1tyC0d3", 4));
console.log("umghlrlose==>", dynamicPassword("lrloseumgh", 6));
