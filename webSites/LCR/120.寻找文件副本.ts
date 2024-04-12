function findRepeatDocument(documents: number[]): number {
  let i = 0;
  while (i < documents.length) {
    if (documents[i] === i) {
      i++;
      continue;
    }
    if (documents[i] === documents[documents[i]]) { return documents[i] }
    const tmp = documents[i];
    documents[i] = documents[documents[i]];
    documents[tmp] = tmp;
  }
  return -1
};

console.log(findRepeatDocument([2, 5, 3, 0, 5, 0]));
console.log(findRepeatDocument([3, 4, 2, 1, 1, 0]));
