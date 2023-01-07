/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2023-01-06 11:41:56
 * @LastEditor: LiuJie
 * @LastEditTime: 2023-01-06 11:42:02
 */
function foo({ x, y = 5 } = { x: 2, y: 3 }) {
  console.log(x, y);
}

foo() // undefined 5