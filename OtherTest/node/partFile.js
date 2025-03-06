const fs = require('fs');
const path = require('path');

/**
 * 切分指定目录下的文件到新建目录下
 * @param {string} srcDir - 源目录路径
 * @param {string} destDir - 目标根目录
 * @param {number} maxSize - 每个子目录的最大大小（单位：字节）
 */
async function splitFiles(srcDir, destDir, maxSize) {
  try {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(srcDir).filter(file => fs.statSync(path.join(srcDir, file)).isFile());
    let folderIndex = 0;
    let currentDir = path.join(destDir, `output${folderIndex}`);
    fs.mkdirSync(currentDir, { recursive: true });
    let currentSize = 0;

    for (let i = 0; i < files.length; i++) {
      const srcFile = path.join(srcDir, files[i]);
      const fileSize = fs.statSync(srcFile).size;

      // 如果单个文件本身超过 maxSize，则直接单独放入新文件夹
      if (fileSize > maxSize) {
        folderIndex++;
        currentDir = path.join(destDir, `output${folderIndex}`);
        fs.mkdirSync(currentDir, { recursive: true });
        currentSize = 0;
      }

      // 如果当前文件加入后超过 maxSize，先切换到新文件夹
      if (currentSize + fileSize > maxSize && currentSize > 0) {
        folderIndex++;
        currentDir = path.join(destDir, `output${folderIndex}`);
        fs.mkdirSync(currentDir, { recursive: true });
        currentSize = 0;
      }

      const destFile = path.join(currentDir, files[i]);
      fs.copyFileSync(srcFile, destFile);
      currentSize += fileSize;

      console.log(`Copied: ${srcFile} -> ${destFile} (Size: ${fileSize} bytes)`);
    }

    console.log('文件切分完成');
  } catch (error) {
    console.error('发生错误:', error);
  }
}

// 示例调用
const srcDirectory = '/Users/liujie/Downloads/saffron20250305';  // 源文件目录
const destDirectory = '/Users/liujie/Downloads/output'; // 目标目录
const maxSize = 1.7 * 1024 * 1024 * 1024; // 可能不是 1024 而是 1000

splitFiles(srcDirectory, destDirectory, maxSize);
