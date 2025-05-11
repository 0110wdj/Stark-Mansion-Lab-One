// 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
const data = [
  {
    id: 1,
    name: "广东省",
    children: [
      {
        id: 11,
        name: "深圳市",
        children: [
          {
            id: 111,
            name: "南山区",
          },
          {
            id: 112,
            name: "福田区",
          },
        ],
      },
    ],
  },
];
const value = "112";
const fn = (value) => {
  // 用于存储查找到的路径（从根到目标节点）
  const result = [];
  
  /**
   * 递归查找目标 id，并记录路径
   * @param {Array} data 当前遍历的数据数组
   * @param {string} targetId 目标 id（字符串类型）
   * @returns {boolean} 是否找到目标节点
   */
  const findParents = (data, targetId) => {
    for (const item of data) {
      // 判断当前节点 id 是否等于目标 id（类型转换为字符串）
      if (String(item.id) === targetId) {
        // 找到目标节点，将其 id 添加到路径最前面
        result.unshift(item.id);
        return true;
      }
      // 如果有子节点，递归查找
      if (item.children) {
        if (findParents(item.children, targetId)) {
          // 如果在子节点中找到了目标节点，将当前节点 id 添加到路径最前面
          result.unshift(item.id);
          return true;
        }
      }
    }
    // 当前分支未找到目标节点
    return false;
  };

  // 从根节点开始查找
  findParents(data, value);
  // 返回完整路径
  return result;
};

// 输出 [1， 11， 112]
console.log(fn(value));
