import { appendFileSync, readdirSync, lstatSync } from 'node:fs';
import path from 'node:path';

function isDirectory(pathName) {
  const stat = lstatSync(pathName);
  return stat.isDirectory()
}

function getFileList(pathName, deep = 0) {
  const readDir = readdirSync(pathName);
  readDir.map(name => {
    const newPath = pathName + path.sep + name
    if (isDirectory(newPath)) {
      appendFileSync('./fileList.txt', `\n${'|--'.repeat(deep)}${name}\n`)
      getFileList(newPath, deep + 1)
    } else {
      if (['.pdf', '.mobi', '.Mobi', '.epub'].includes(path.extname(newPath))) {
        appendFileSync('./fileList.txt', `${'|--'.repeat(deep)}${name}\n`)
      }
    }
  })
}

getFileList("./电子书")