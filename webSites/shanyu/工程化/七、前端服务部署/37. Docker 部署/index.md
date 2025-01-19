### 隔离

- node 版本
- npm 版本
- 部署端口号

### Docker

```bash
# check
docker info
# build
docker build .
# ls
docker images
# run
docker run -i $id
docker run -p 9091:8080 -it c1c44bd3c5a6
```

### 其他

```bash
# 启动前端服务
npx serve . -p 8080
```
