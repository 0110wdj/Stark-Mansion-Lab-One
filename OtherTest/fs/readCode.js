const fs = require('fs');
const path = require('path');

// 配置
const TARGET_DIR = '/Users/liujie/WorkSpace/gitBranch/wingfuzz-protocol-shell/src';
const OUTPUT_FILE = 'tmp.txt';
const MAX_LINES = 4000;
const SUPPORTED_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx'];

/**
 * 递归获取目录下所有符合条件的文件
 * @param {string} dirPath 目录路径
 * @param {Array} files 文件数组
 * @returns {Array} 文件路径数组
 */
function getAllFiles(dirPath, files = []) {
    try {
        const items = fs.readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // 递归处理子目录
                getAllFiles(fullPath, files);
            } else if (stat.isFile()) {
                // 检查文件扩展名
                const ext = path.extname(item).toLowerCase();
                if (SUPPORTED_EXTENSIONS.includes(ext)) {
                    files.push(fullPath);
                }
            }
        }
    } catch (error) {
        console.error(`读取目录 ${dirPath} 时出错:`, error.message);
    }
    
    return files;
}

/**
 * 从数组中随机选择一个元素
 * @param {Array} array 数组
 * @returns {*} 随机元素
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * 读取文件内容并返回指定行数
 * @param {string} filePath 文件路径
 * @param {number} maxLines 最大行数
 * @returns {{content: string, lineCount: number}} 文件内容和行数
 */
function readFileContent(filePath, maxLines) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        if (lines.length <= maxLines) {
            return {
                content: content,
                lineCount: lines.length
            };
        } else {
            // 只返回前 maxLines 行
            return {
                content: lines.slice(0, maxLines).join('\n'),
                lineCount: maxLines
            };
        }
    } catch (error) {
        console.error(`读取文件 ${filePath} 时出错: ${error.message}`);
        return {
            content: '',
            lineCount: 0
        };
    }
}

/**
 * 计算字符串的行数
 * @param {string} text 文本内容
 * @returns {number} 行数
 */
function countLines(text) {
    if (!text) return 0;
    return text.split('\n').length;
}

/**
 * 主函数
 */
function main() {
    console.log('开始搜索文件...');
    console.log(`目标目录: ${TARGET_DIR}`);
    console.log(`支持的文件类型: ${SUPPORTED_EXTENSIONS.join(', ')}`);
    console.log(`最大读取行数: ${MAX_LINES}`);
    console.log('-----------------------------------');
    
    // 检查目标目录是否存在
    if (!fs.existsSync(TARGET_DIR)) {
        console.error(`错误: 目标目录 ${TARGET_DIR} 不存在！`);
        return;
    }
    
    // 获取所有符合条件的文件
    const allFiles = getAllFiles(TARGET_DIR);
    
    if (allFiles.length === 0) {
        console.log('未找到任何符合条件的文件！');
        return;
    }
    
    console.log(`找到 ${allFiles.length} 个符合条件的文件`);
    
    // 记录已读取的文件和当前累计内容
    const readFiles = new Set();
    let totalContent = '';
    let totalLines = 0;
    let fileCount = 0;
    
    // 循环读取文件直到达到行数上限
    while (totalLines < MAX_LINES && readFiles.size < allFiles.length) {
        // 过滤出未读取的文件
        const unreadFiles = allFiles.filter(file => !readFiles.has(file));
        
        if (unreadFiles.length === 0) {
            console.log('所有文件都已读取完毕');
            break;
        }
        
        // 随机选择一个未读取的文件
        const selectedFile = getRandomElement(unreadFiles);
        readFiles.add(selectedFile);
        fileCount++;
        
        console.log(`[${fileCount}] 正在读取: ${path.basename(selectedFile)}`);
        
        // 计算还能读取多少行
        const remainingLines = MAX_LINES - totalLines;
        
        // 读取文件内容
        const { content, lineCount } = readFileContent(selectedFile, remainingLines);
        
        if (content) {
            // 如果不是第一个文件，添加分隔符
            if (totalContent) {
                totalContent += '\n\n';
                totalLines += 2;
            }
            
            totalContent += content;
            totalLines += lineCount;
            
            console.log(`   读取了 ${lineCount} 行，当前总行数: ${totalLines}`);
        }
    }
    
    // 写入到输出文件
    try {
        fs.writeFileSync(OUTPUT_FILE, totalContent, 'utf8');
        console.log('-----------------------------------');
        console.log(`✅ 读取完成！`);
        console.log(`📁 读取文件数量: ${fileCount}`);
        console.log(`📄 总行数: ${totalLines}`);
        console.log(`💾 文件大小: ${fs.statSync(OUTPUT_FILE).size} 字节`);
        console.log(`📝 输出文件: ${OUTPUT_FILE}`);
        
        if (totalLines >= MAX_LINES) {
            console.log(`🎯 已达到最大行数限制 (${MAX_LINES})`);
        } else if (readFiles.size >= allFiles.length) {
            console.log(`📚 已读取所有可用文件`);
        }
        
    } catch (error) {
        console.error(`写入文件时出错:`, error.message);
    }
}

// 执行主函数
if (require.main === module) {
    main();
}

module.exports = {
    getAllFiles,
    getRandomElement,
    readFileContent,
    countLines,
    main
};
