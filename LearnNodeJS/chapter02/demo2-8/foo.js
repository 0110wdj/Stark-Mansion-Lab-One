console.log('foo模块被加载');
// console.log(module.filename);
delete require.cache[module.filename];