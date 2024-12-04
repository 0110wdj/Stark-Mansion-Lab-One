## bundle.js 结构

```js
const __webpack_modules__ = [() => {}];
const __webpack_require__ = (id) => {
  const module = { exports: {} };
  const m = __webpack_modules__[id](module, __webpack_require__);
  return module.exports;
};

__webpack_require__(0);
```

## vscode debug

## rollup

[在线模块化示例](https://rollupjs.org/repl/?version=2.62.0&shareable=JTdCJTIyZXhhbXBsZSUyMiUzQW51bGwlMkMlMjJtb2R1bGVzJTIyJTNBJTVCJTdCJTIybmFtZSUyMiUzQSUyMm1haW4uanMlMjIlMkMlMjJjb2RlJTIyJTNBJTIyaW1wb3J0JTIwbmFtZSUyMGZyb20lMjAnLiUyRm5hbWUnJTVDbmNvbnNvbGUubG9nKG5hbWUpJTIyJTJDJTIyaXNFbnRyeSUyMiUzQXRydWUlN0QlMkMlN0IlMjJuYW1lJTIyJTNBJTIybmFtZS5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJjb25zdCUyMG5hbWUlMjAlM0QlMjAnc2hhbnl1ZSclNUNuZXhwb3J0JTIwZGVmYXVsdCUyMG5hbWUlMjIlMkMlMjJpc0VudHJ5JTIyJTNBZmFsc2UlN0QlNUQlMkMlMjJvcHRpb25zJTIyJTNBJTdCJTdEJTdE)
