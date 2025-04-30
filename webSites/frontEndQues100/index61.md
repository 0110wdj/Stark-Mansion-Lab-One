## 61 介绍下如何实现 token 加密

> 服务端在生成 token 时，加入少量的用户信息，比如用户的 id。服务端接收到 token 之后，可以解析出这些数据，从而将 token 和用户关联了起来。

> 需要一个 secret（随机数）
> 后端利用 secret 和加密算法(如：HMAC-SHA256)对 payload(如账号密码)生成一个字符串(token)，返回前端
> 前端每次 request 在 header 中带上 token
> 后端用同样的算法解密
