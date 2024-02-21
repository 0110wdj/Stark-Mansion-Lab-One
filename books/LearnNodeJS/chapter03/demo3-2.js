/* 异步代码 */
console.log('起床');
console.log('背单词');
function eatBreakfast(){
    console.log('开始吃早餐');
    setTimeout(function(){
        console.log('早餐吃完了');
    },2000)
}
eatBreakfast();
console.log('去上学');