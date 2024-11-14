const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 配置下载选项
const downloadOptions = {
  // 并发下载的数量（可选）
  concurrency: 5,
  // 下载文件的保存目录（可选）
  directory: path.resolve(__dirname, 'downloads'),
};

// 创建一个队列来控制并发下载
class Queue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.queue = [];
    this.activeCount = 0;
    this.results = [];
  }

  add(promiseFn) {
    return new Promise((resolve, reject) => {
      const task = { promiseFn, resolve, reject };
      this.queue.push(task);
      this.next();
    });
  }

  next() {
    if (this.activeCount < this.concurrency && this.queue.length) {
      const { promiseFn, resolve, reject } = this.queue.shift();
      this.activeCount++;
      promiseFn()
        .then(value => {
          resolve(value);
        })
        .catch(err => {
          reject(err);
        })
        .finally(() => {
          this.activeCount--;
          this.next();
        });
    }
  }
}

// 创建下载目录（如果不存在）
const createDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// 下载单个文件
const downloadFile = async (url, index) => {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
    });

    // 从 URL 中提取文件名
    const urlPath = new URL(url).pathname;
    const fileName = path.basename(urlPath) || `file_${index}`;
    const filePath = path.join(downloadOptions.directory, fileName);

    // 创建写入流
    const writer = fs.createWriteStream(filePath);

    // 管道传输数据
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`下载完成: ${fileName}`);
        resolve(fileName);
      });
      writer.on('error', (err) => {
        console.error(`下载失败: ${fileName}`, err);
        reject(err);
      });
    });
  } catch (error) {
    console.error(`请求失败: ${url}`, error);
    throw error;
  }
};

// 主函数
const main = async (urls) => {
  // 创建下载目录
  createDirectory(downloadOptions.directory);

  // 初始化队列
  const queue = new Queue(downloadOptions.concurrency);

  // 添加下载任务到队列
  const downloadPromises = urls.map((url, index) => {
    return queue.add(() => downloadFile(url, index));
  });

  // 等待所有下载完成
  try {
    const results = await Promise.all(downloadPromises);
    console.log('所有文件下载完成');
  } catch (error) {
    console.error('下载过程中发生错误');
  }
};

// 示例 URL 列表
const urls = [
  'https://i-blog.csdnimg.cn/blog_migrate/732f10ea9099a16fbb63ee352438f726.png',
  'https://i-blog.csdnimg.cn/blog_migrate/1e4806cd95bed2fc4fb9d724b345509b.png',
  // 在这里添加更多 URL
];

// 运行主函数
main(urls);