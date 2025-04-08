const fs = require('fs');
const path = require('path');

// 目标目录
const dirPath = '/Users/liujie/Downloads/pictures'; // 替换为你自己的目录路径
const outputFilePath = '/Users/liujie/Downloads/base64.js';

// 读取目录中的文件
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('无法读取目录:', err);
    return;
  }

  // 过滤出所有 PNG 文件
  const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

  // 存储所有 base64 编码的字符串
  const base64Array = pngFiles.map(file => {
    const filePath = path.join(dirPath, file);
    const fileBuffer = fs.readFileSync(filePath);  // 读取文件为 Buffer
    return `data:image/png;base64,${fileBuffer.toString('base64')}`;  // 转换为 Base64 字符串
  });

  // 将 base64 编码字符串数组写入文件
  // 将结果写入到 JS 文件
  const jsContent = `
    const base64Array = ${JSON.stringify(base64Array, null, 2)};
    module.exports = base64Array; // 如果需要在其他地方导入该数组
  `;

  fs.writeFileSync(outputFilePath, jsContent, 'utf8', (err) => {
    if (err) {
      console.error('写入文件失败:', err);
    } else {
      console.log(`Base64 编码已成功写入到 ${outputFilePath}`);
    }
  });
});
