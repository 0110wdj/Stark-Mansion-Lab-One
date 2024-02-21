/* function recall(str, callback) {
    console.log(str);
    setTimeout(()=>{console.log('timeout');},2000);
    callback('success');
}

recall('test',function (outStr) {
    console.log(outStr);
})

console.log('last ?'); */

/* var fs = require('fs')
fs.readFile('example.txt', (err, contents) => {
    if(err) {
        throw err;
    }
    console.log(contents);
})
console.log('Hi'); */

// error
/* var fs = require('fs')
let promise = fs.readFile('example.txt');
promise.then(value => console.log(value)); */

/* let fs = require('fs');

function readFileTest(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, { encoding: 'utf8' }, function (err, contents) {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        })
    })
}
let promise = readFileTest('example.txt');

promise.then(function (contents) {
    console.log(contents);
}, function (err) {
    console.error(err.message);
}) */

/* let p1 = new Promise(function (resolve, reject) {
    resolve(42);
})

p1.then(value => {
    console.log(value);
    throw new Error('something')
}).catch((error) => {
    console.log('test err');
    console.log(error.message);
}) */

/* let p1 = new Promise(function (resolve, reject) {
    throw new Error('something 1')
})

p1.catch(error => {
    console.log(error.message);
    throw new Error('something 2')
}).catch((error) => {
    console.log(error.message);
    throw new Error('something 3')
}).catch((error) => {
    console.log(error.message);
    console.log('something 4');
}) */

let p1 = new Promise(function (resolve, reject) {
    // resolve(42)
    reject(43)
})

p1.then(value => {
    console.log(value);
}).catch((value) => {
    console.log(value); 
})

