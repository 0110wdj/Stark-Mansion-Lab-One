/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2023-01-06 10:53:31
 * @LastEditor: LiuJie
 * @LastEditTime: 2023-01-06 10:54:40
 */
const arr = [
  'peach',
  'straw',
  'apple',
  '3',
  '2',
  'spork'
];

const stableSorting = (s1, s2) => {
  if (s1[0] < s2[0]) return -1;
  return 1;
};

console.log(arr.sort(stableSorting));
// ["apple", "peach", "straw", "spork"]