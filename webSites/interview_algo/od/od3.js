/**
 * 模块构建顺序问题
 *
 * 题目描述：
 * 给定一组模块名称和模块间的依赖关系，需要计算出所有合法的构建顺序。
 * 依赖关系表示为 [被依赖的模块, 依赖的模块]，例如 ["a", "b"] 表示 b 依赖于 a，
 * 因此 a 必须在 b 之前构建。
 *
 * 输入：
 * - moduleName: string[] 所有模块名称数组
 * - dependencyGraph: string[][] 依赖关系二维数组，每个子数组为 [被依赖模块, 依赖模块]
 *
 * 输出：
 * - 返回所有合法的构建顺序的二维数组，如果存在循环依赖则返回空数组
 *
 * 示例：
 * 输入: moduleName = ["a", "b", "c"], dependencyGraph = [["a", "b"], ["c", "b"]]
 * 输出: [["a", "c", "b"], ["c", "a", "b"]]
 * 解释: b 依赖 a 和 c，所以 b 必须在最后构建。a 和 c 之间无依赖，可以互换顺序。
 */

/**
 * 解题思路：
 *
 * 这是一个经典的「所有拓扑排序」问题，需要找出有向无环图(DAG)的所有合法拓扑序列。
 *
 * 核心算法：回溯法 + 拓扑排序
 *
 * 步骤说明：
 * 1. 构建图的表示：
 *    - inDegree: 记录每个节点的入度（有多少个前置依赖）
 *    - adjacency: 邻接表，记录每个节点指向哪些节点
 *
 * 2. 回溯搜索所有可能路径：
 *    - 每次选择入度为0且未访问的节点（当前可构建的模块）
 *    - 选中节点后，将其所有邻居的入度减1（模拟移除该节点）
 *    - 递归进入下一层，继续选择入度为0的节点
 *    - 回溯：恢复邻居的入度，尝试下一个候选节点
 *
 * 3. 终止条件：
 *    - 当路径长度等于节点总数时，找到一个合法构建顺序
 *    - 如果存在循环依赖，会永远无法凑齐所有节点，返回空数组
 *
 * 时间复杂度：最坏情况 O(N!)  - 当没有任何依赖时，有 N! 种排列
 * 空间复杂度：O(N)           - 递归栈和 visited 集合
 */

function generateAllBuildOrders(moduleName, dependencyGraph) {
  // 入度表：key=模块名, value=该模块依赖的前置模块数量
  const inDegree = new Map();
  // 邻接表：key=模块名, value=依赖该模块的后续模块列表
  const adjacency = new Map();

  // 初始化：所有节点入度为0，邻接表为空
  moduleName.forEach(name => {
    inDegree.set(name, 0);
    adjacency.set(name, []);
  });

  // 根据依赖关系构建图
  // [from, to] 表示 to 依赖 from，即 from 必须在 to 之前构建
  dependencyGraph.forEach(([from, to]) => {
    inDegree.set(to, inDegree.get(to) + 1);  // to 的入度+1
    adjacency.get(from).push(to);             // from 指向 to
  });

  const result = [];       // 存储所有合法的构建顺序
  const visited = new Set(); // 标记已访问的节点

  /**
   * 回溯函数
   * @param {string[]} path - 当前已选择的构建路径
   */
  function backtrack(path) {
    // 递归终止：路径长度等于模块总数，找到一个合法解
    if (path.length === moduleName.length) {
      result.push([...path]);
      return;
    }

    // 找出所有入度为0且未访问的节点（当前可以构建的模块）
    const zeroInDegreeNodes = moduleName.filter(name => {
      return inDegree.get(name) === 0 && !visited.has(name);
    });

    // 尝试每一个候选节点
    for (const node of zeroInDegreeNodes) {
      visited.add(node);    // 标记为已访问
      path.push(node);      // 加入当前路径

      // 将该节点的所有邻居入度减1（模拟移除该节点）
      adjacency.get(node).forEach(neighbor => {
        inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      });

      // 递归进入下一层，继续选择
      backtrack(path);

      // 回溯：恢复邻居的入度
      adjacency.get(node).forEach(neighbor => {
        inDegree.set(neighbor, inDegree.get(neighbor) + 1);
      });

      path.pop();          // 从路径中移除
      visited.delete(node);// 取消访问标记
    }
  }

  backtrack([]);
  return result;
}

// 测试用例 1: 基础示例 - 一个节点依赖另外两个节点
// 输入: ["a", "b", "c"], [["a", "b"], ["c", "b"]]
// 预期输出: [["a", "c", "b"], ["c", "a", "b"]]
console.log("测试用例 1:");
console.log(generateAllBuildOrders(["a", "b", "c"], [["a", "b"], ["c", "b"]]));

// 测试用例 2: 链式依赖 - 形成一条链
// 输入: ["A", "B", "C", "D"], [["A", "B"], ["B", "C"], ["C", "D"]]
// 预期输出: [["A", "B", "C", "D"]]
console.log("\n测试用例 2:");
console.log(generateAllBuildOrders(["A", "B", "C", "D"], [["A", "B"], ["B", "C"], ["C", "D"]]));

// 测试用例 3: 循环依赖 - 检测到环时返回空数组
// 输入: ["x", "y", "z"], [["x", "y"], ["y", "z"], ["z", "x"]]
// 预期输出: []
console.log("\n测试用例 3:");
console.log(generateAllBuildOrders(["x", "y", "z"], [["x", "y"], ["y", "z"], ["z", "x"]]));
