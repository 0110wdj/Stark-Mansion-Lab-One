/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-07-05 21:51:51
 * @LastEditors: LiuJie
 * @LastEditTime: 2022-07-06 09:44:52
 */
// foo()
var a = true;
if (a) {
    function foo() {
        console.log('foo');
    }
} else {
    function foo() {
        console.log('bar');
    }
}
foo();