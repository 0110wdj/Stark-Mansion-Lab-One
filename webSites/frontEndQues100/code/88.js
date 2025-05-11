// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
// 原始 list 如下
// let list =[
//   {id:1,name:'部门A',parentId:0},
//   {id:2,name:'部门B',parentId:0},
//   {id:3,name:'部门C',parentId:1},
//   {id:4,name:'部门D',parentId:1},
//   {id:5,name:'部门E',parentId:2},
//   {id:6,name:'部门F',parentId:3},
//   {id:7,name:'部门G',parentId:2},
//   {id:8,name:'部门H',parentId:4}
// ];
// const result = convert(list, ...);

// // 转换后的结果如下
// let result = [
//   {
//     id: 1,
//     name: '部门A',
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: '部门C',
//         parentId: 1,
//         children: [
//           {
//             id: 6,
//             name: '部门F',
//             parentId: 3
//           }, {
//             id: 16,
//             name: '部门L',
//             parentId: 3
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: '部门D',
//         parentId: 1,
//         children: [
//           {
//             id: 8,
//             name: '部门H',
//             parentId: 4
//           }
//         ]
//       }
//     ]
//   },
// ···
// ];

function convert(list) {
  // 创建一个Map来存储所有节点，方便快速查找
  const map = new Map();
  // 存储最终结果
  const result = [];

  // 首先将所有节点放入Map中
  for (const item of list) {
    map.set(item.id, { ...item, children: [] });
  }

  // 遍历列表，构建树形结构
  for (const item of list) {
    const node = map.get(item.id);
    if (item.parentId === 0) {
      // 如果是根节点，直接添加到结果数组
      result.push(node);
    } else {
      // 如果不是根节点，找到父节点，将当前节点添加到父节点的children中
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  }

  return result;
}

// 测试用例
const list = [
  {id: 1, name: '部门A', parentId: 0},
  {id: 2, name: '部门B', parentId: 0},
  {id: 3, name: '部门C', parentId: 1},
  {id: 4, name: '部门D', parentId: 1},
  {id: 5, name: '部门E', parentId: 2},
  {id: 6, name: '部门F', parentId: 3},
  {id: 7, name: '部门G', parentId: 2},
  {id: 8, name: '部门H', parentId: 4}
];

const result = convert(list);
console.log(JSON.stringify(result, null, 2));

