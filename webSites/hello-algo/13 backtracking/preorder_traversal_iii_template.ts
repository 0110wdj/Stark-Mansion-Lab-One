interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

/* 判断当前状态是否为解 */
function isSolution(state: TreeNode[]): boolean {
  return state && state[state.length - 1]?.val === 7;
}

/* 记录解 */
function recordSolution(state: TreeNode[], res: TreeNode[][]): void {
  res.push([...state]);
}

/* 判断在当前状态下，该选择是否合法 */
function isValid(state: TreeNode[], choice: TreeNode): boolean {
  return choice !== null && choice.val !== 3;
}

/* 更新状态 */
function makeChoice(state: TreeNode[], choice: TreeNode): void {
  state.push(choice);
}

/* 恢复状态 */
function undoChoice(state: TreeNode[]): void {
  state.pop();
}

/* 回溯算法：例题三 */
function backtrack(
  state: TreeNode[],
  choices: TreeNode[],
  res: TreeNode[][]
): void {
  // 检查是否为解
  if (isSolution(state)) {
    // 记录解
    recordSolution(state, res);
  }
  // 遍历所有选择
  for (const choice of choices) {
    // 剪枝：检查选择是否合法
    if (isValid(state, choice)) {
      // 尝试：做出选择，更新状态
      makeChoice(state, choice);
      // 进行下一轮选择
      backtrack(state, [choice.left, choice.right], res);
      // 回退：撤销选择，恢复到之前的状态
      undoChoice(state);
    }
  }
}
