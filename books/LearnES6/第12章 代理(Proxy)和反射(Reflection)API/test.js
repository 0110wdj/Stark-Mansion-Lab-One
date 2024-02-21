/* let colors = ['a', 'b', 'c']
colors.length = 2;
console.log(colors); */

/* let target = {};
let proxy = new Proxy(target, {});

proxy.name = "proxy";
console.log(proxy.name);
console.log(target.name);

target.name = 'target';
console.log(proxy.name);
console.log(target.name); */

/* let target = { name: 'target' };
let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
        if (!trapTarget.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new TypeError('value must be Number');
            }
        }
        // return Reflect.set(trapTarget, key, value, receiver);
        return Reflect.set(trapTarget, key, 'value', receiver);
    }
});

proxy.count = 1;
console.log(proxy.count);
console.log(target.count);

proxy.name = "proxy";
console.log(proxy.name);
console.log(target.name);

proxy.count = "proxy";
console.log(proxy.count);
console.log(target.count);

target.count = "2333s";
console.log(proxy.count);
console.log(target.count);

proxy.newName = "proxy"; */

