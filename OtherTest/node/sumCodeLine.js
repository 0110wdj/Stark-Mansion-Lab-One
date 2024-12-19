const fs = require('fs');
const path = require('path');

// 统计文件的行数
function countLines(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data.split('\n').length;
}

// 递归遍历文件夹
function traverseDirectory(directory, extensions) {
  let totalLines = 0;

  // 读取文件夹内容
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // 如果是文件夹，递归遍历
      totalLines += traverseDirectory(filePath, extensions);
    } else if (stats.isFile() && extensions.includes(path.extname(file))) {
      // 如果是代码文件，统计行数
      const lines = countLines(filePath);
      console.log(`File: ${filePath}, Lines: ${lines}`);
      totalLines += lines;
    }
  });

  return totalLines;
}

// 运行脚本
const directory = process.argv[2] || '.'; // 默认是当前目录
const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.html',
  '.json',
  '.css',
  '.less',
  '.scss',
  '.sass',
  '.java',
  '.xml',
]; // 支持的代码文件扩展名

const totalLines = traverseDirectory(directory, extensions);
console.log(`Total lines of code: ${totalLines}`);
