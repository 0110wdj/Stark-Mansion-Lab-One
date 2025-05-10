const dividePhotos = require('./dividePhotos');

const sourceDir = '/Users/liujie/Pictures/saffron20250510/screen';
const maxFiles = 400;
const maxSizeMB = 3 * 1024; // 3GB = 3 * 1024MB

console.log('开始处理文件...');
dividePhotos(sourceDir, maxFiles, maxSizeMB)
    .then(() => console.log('处理完成'))
    .catch(error => console.error('发生错误:', error)); 