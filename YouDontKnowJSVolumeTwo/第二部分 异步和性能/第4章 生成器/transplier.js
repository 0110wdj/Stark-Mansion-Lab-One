/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-09-29 08:45:06
 * @LastEditor: LiuJie
 * @LastEditTime: 2022-09-29 08:52:12
 */
function* foo(url) {
  try {
    console.log('requesting:', url);
    var val = yield request(url)
    console.log(val);
  }
  catch (err) {
    console.log('oops:', err);
    return false
  }
}
var it = foo('http:www.bing.com')