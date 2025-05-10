// 读取指定目录中的全部文件，达到指定文件数量或者指定体积总和之后，将这部分文件移动到改目录下的新的文件夹中

const fs = require('node:fs');
const path = require('node:path');

/**
 * 将文件按照指定数量或大小分组并移动到新文件夹
 * @param {string} sourceDir - 源目录路径
 * @param {number} maxFiles - 每组最大文件数量
 * @param {number} maxSizeMB - 每组最大体积（MB）
 */
async function dividePhotos(sourceDir, maxFiles = 100, maxSizeMB = 100) {
    try {
        // 确保源目录存在
        if (!fs.existsSync(sourceDir)) {
            throw new Error('源目录不存在');
        }

        // 读取目录中的所有文件
        const files = fs.readdirSync(sourceDir)
            .filter(file => fs.statSync(path.join(sourceDir, file)).isFile());

        let currentGroup = [];
        let currentGroupSize = 0;
        let groupCount = 1;

        for (const file of files) {
            const filePath = path.join(sourceDir, file);
            const stats = fs.statSync(filePath);
            const fileSize = stats.size;

            // 检查是否需要创建新组
            if (currentGroup.length >= maxFiles || 
                (currentGroupSize + fileSize) > (maxSizeMB * 1024 * 1024)) {
                // 创建新组文件夹
                const groupDir = path.join(sourceDir, `group_${groupCount}`);
                if (!fs.existsSync(groupDir)) {
                    fs.mkdirSync(groupDir);
                }

                // 移动当前组的文件
                for (const groupFile of currentGroup) {
                    const sourcePath = path.join(sourceDir, groupFile);
                    const targetPath = path.join(groupDir, groupFile);
                    fs.renameSync(sourcePath, targetPath);
                }

                // 重置当前组
                currentGroup = [];
                currentGroupSize = 0;
                groupCount++;
            }

            // 添加文件到当前组
            currentGroup.push(file);
            currentGroupSize += fileSize;
        }

        // 处理最后一组文件
        if (currentGroup.length > 0) {
            const groupDir = path.join(sourceDir, `group_${groupCount}`);
            if (!fs.existsSync(groupDir)) {
                fs.mkdirSync(groupDir);
            }

            for (const groupFile of currentGroup) {
                const sourcePath = path.join(sourceDir, groupFile);
                const targetPath = path.join(groupDir, groupFile);
                fs.renameSync(sourcePath, targetPath);
            }
        }

        console.log(`文件分组完成，共创建了 ${groupCount} 个组`);
    } catch (error) {
        console.error('处理文件时发生错误:', error.message);
    }
}

// 使用示例
// dividePhotos('/path/to/your/photos', 100, 100); // 每组最多100个文件或100MB

module.exports = dividePhotos;



