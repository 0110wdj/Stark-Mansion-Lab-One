function takeAttendance(records: number[]): number {
  if (records[0] !== 0) { return 0 }
  let i = 0;
  while (i < records.length - 1 && (records[i] + records[i + 1]) % 2 !== 0) {
    i++
  }
  return i + 1
};

console.log(takeAttendance([0, 1, 2, 3, 5]));
console.log(takeAttendance([0, 1, 2, 3, 4, 5, 6, 8]));
console.log(takeAttendance([1]));
