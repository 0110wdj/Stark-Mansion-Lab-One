const fs = require('fs');
const path = require('path');

/**
 * 重命名指定目录下的文件，去掉文件名中的 "SpotiDownloader.com - " 片段
 * @param {string} directoryPath - 要处理的目录路径
 * @param {boolean} dryRun - 是否只预览不实际重命名，默认为 false
 * @returns {Object} 返回处理结果统计
 */
function renameSpotifyFiles(directoryPath, dryRun = false) {
    const results = {
        total: 0,
        renamed: 0,
        skipped: 0,
        errors: []
    };

    try {
        // 检查目录是否存在
        if (!fs.existsSync(directoryPath)) {
            throw new Error(`目录不存在: ${directoryPath}`);
        }

        // 读取目录中的所有文件
        const files = fs.readdirSync(directoryPath);
        results.total = files.length;

        console.log(`开始处理目录: ${directoryPath}`);
        console.log(`找到 ${files.length} 个文件`);
        console.log(`模式: ${dryRun ? '预览模式' : '实际重命名'}`);
        console.log('---');

        files.forEach((filename) => {
            try {
                // 检查文件名是否包含目标字符串
                if (filename.includes('SpotiDownloader.com - ')) {
                    // 去掉 "SpotiDownloader.com - " 片段
                    const newFilename = filename.replace('SpotiDownloader.com - ', '');
                    
                    if (dryRun) {
                        console.log(`[预览] "${filename}" -> "${newFilename}"`);
                    } else {
                        const oldPath = path.join(directoryPath, filename);
                        const newPath = path.join(directoryPath, newFilename);
                        
                        // 检查新文件名是否已存在
                        if (fs.existsSync(newPath)) {
                            const error = `文件已存在，跳过重命名: ${newFilename}`;
                            results.errors.push(error);
                            console.log(`[错误] ${error}`);
                            results.skipped++;
                        } else {
                            fs.renameSync(oldPath, newPath);
                            console.log(`[重命名] "${filename}" -> "${newFilename}"`);
                            results.renamed++;
                        }
                    }
                } else {
                    console.log(`[跳过] "${filename}" (不包含目标字符串)`);
                    results.skipped++;
                }
            } catch (error) {
                const errorMsg = `处理文件 "${filename}" 时出错: ${error.message}`;
                results.errors.push(errorMsg);
                console.log(`[错误] ${errorMsg}`);
            }
        });

        console.log('---');
        console.log('处理完成!');
        console.log(`总计: ${results.total} 个文件`);
        console.log(`重命名: ${results.renamed} 个文件`);
        console.log(`跳过: ${results.skipped} 个文件`);
        console.log(`错误: ${results.errors.length} 个`);

        if (results.errors.length > 0) {
            console.log('\n错误详情:');
            results.errors.forEach(error => console.log(`- ${error}`));
        }

    } catch (error) {
        console.error('处理目录时出错:', error.message);
        results.errors.push(error.message);
    }

    return results;
}

/**
 * 使用示例
 */
function example() {
    // 示例1: 预览模式（不实际重命名）
    // console.log('=== 预览模式 ===');
    // renameSpotifyFiles('/Users/liujie/Downloads/test', true);
    
    console.log('\n=== 实际重命名模式 ===');
    // 示例2: 实际重命名
    renameSpotifyFiles('/Users/liujie/Downloads/', false);
}

// 如果直接运行此文件，执行示例
if (require.main === module) {
    example();
}

module.exports = { renameSpotifyFiles };
