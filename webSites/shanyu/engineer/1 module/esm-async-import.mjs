// 在较新的 Node.js 版本（>= 14）中，top-level await 默认是启用的，不需要额外的配置。
// const ms = await import("https://cdn.skypack.dev/ms@latest"); 
// ms.default(1000);

// 不支持远程加载
// async function loadModule() {
//   const ms = await import("https://cdn.skypack.dev/ms@latest");
//   console.log(ms.default(1000));  // 使用返回的 ms 模块
// }

// loadModule();