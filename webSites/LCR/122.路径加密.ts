function pathEncryption(path: string): string {
  return path.replaceAll('.', ' ')
};

console.log(pathEncryption('a.aef.qerf.bb'));
