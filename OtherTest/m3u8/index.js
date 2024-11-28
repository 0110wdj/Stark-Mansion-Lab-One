for (let i = 1; i <= 33; i++) {
  const cmd = `.\\ffmpeg.exe -i D:\\迅雷下载\\${i}\\index.m3u8 -c copy ${i}.mp4`
  console.log(cmd);
}