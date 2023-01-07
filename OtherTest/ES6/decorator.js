/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2023-01-06 10:08:09
 * @LastEditor: LiuJie
 * @LastEditTime: 2023-01-06 10:12:38
 */

function strong(target) {
  target.AK = true
  return target;
}

// @strong
class soldier {
}
soldier = strong(soldier) || soldier

const one = new soldier()
console.log(one);
console.log(one.AK);