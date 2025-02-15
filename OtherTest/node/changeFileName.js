const fs = require('fs');
const path = require('path');

const folderPath = '~/Downloads/data/test';  // 目标文件夹路径

// 读取文件夹内容
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('读取文件夹失败:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    // 检查文件是否为文件而不是文件夹
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error('读取文件信息失败:', err);
        return;
      }

      if (stats.isFile()) {
        // 获取文件的扩展名，如果没有扩展名则不替换
        const extname = path.extname(file);
        const newFileName = extname ? file.replace(extname, '.txt') : `${file}.txt`;

        const newFilePath = path.join(folderPath, newFileName);

        // 重命名文件
        fs.rename(filePath, newFilePath, (err) => {
          if (err) {
            console.error(`重命名失败: ${file} -> ${newFileName}`, err);
          } else {
            console.log(`已重命名: ${file} -> ${newFileName}`);
          }
        });
      }
    });
  });
});
