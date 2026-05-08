/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 生成所有可能构建顺序
 * @param moduleName string字符串一维数组 所有模块名称
 * @param dependencyGraph string字符串二维数组 所有模块依赖关系
 * @return string字符串一维数组
 */
function generateAllBuildOrders(moduleName, dependencyGraph) {
  const nodeList = [];
  moduleName.forEach(name => {
    nodeList.push({ name, nextNode: null });
  });

  dependencyGraph.forEach(depName => {
    nodeList.forEach(node => {
      if (depName[0] === node.name) {
        node.nextNode = node.find(n => n.name === depName[1]);
      }
    });
  });

  let flag = false;
  for (let i = 0; i < nodeList.length; i++) {
    const head = nodeList[i];
    const visitedNodes = new Map();
    while (head !== null) {
      if (!visitedNodes.has(head.name)) {
        visitedNodes.set(head.name, true);
      } else {
        flag = true;
        return [];
      }
      head = head.nextNode;
    }
  }

  const result = [];
  let lastNodes = [];
  while (true) {

    for (let i = 0; i < nodeList.length; i++) {
      const node = nodeList[i];
      if (node.nextNode === null) {
        lastNodes.push(nextNode);
      }
    }
    if (lastNodes.length === 0) break;
    lastNodes = [];
  }

  return result;
}

console.log(generateAllBuildOrders(["A", "B", "C", "D"], [["A", "B"], ["B", "C"], ["D", "C"]]));
