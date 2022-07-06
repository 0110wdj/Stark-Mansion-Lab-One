/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-07-06 09:49:50
 * @LastEditors: LiuJie
 * @LastEditTime: 2022-07-06 11:24:21
 */
/* function foo() {
    var a = 2;
    var baz = function() {
        console.log(a);
    }
    bar(baz);
}
function bar(baz) {
    baz();
}
foo(); */

/* for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
} */

/* for (var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    })(i);
} */

/* for (var i = 0; i < 10; i++) {
    (function () {
        var j = i;
        setTimeout(function () {
            console.log(i);
            console.log(j);
        }, i * 1000);
    })();
} */

function foo() {
    var a = 2;
    var setValue = function (b) {
        a = b;
    }
    var getValue = function () {
        return a;
    }
    return {
        setValue: setValue,
        getValue: getValue
    }
}

var mm = foo();
var nn = foo();
console.log(mm.getValue());
mm.setValue(3);
console.log(mm.getValue());
console.log(nn.getValue());