// import { fetchArrayData } from '../api/someDataFetch'

// 便于测试
const fetchArrayData = async (): Promise<TreeNode[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const returnData: TreeNode[] = [
        {
          // 点位id
          id: 'id1',
          // 标题
          title: 'titile1',
          // 是否可用
          enabled: true,
          // 层级
          level: 1,
          // 父级点位id
          pid: '',
          // 祖先节点路径
          ancestors: [''],
          // 子结点
          children: [],
        },
        {
          // 点位id
          id: 'id2',
          // 标题
          title: 'titile2',
          // 是否可用
          enabled: true,
          // 层级
          level: 2,
          // 父级点位id
          pid: 'id1',
          // 祖先节点路径
          ancestors: [''],
          // 子结点
          children: [],
        }
      ]
      resolve(returnData)
    }, 1000)
  })
}

/**
 * 一个数据模型，可以在 react 或者 vue 的单应用内，处理和维护某模块的数据
 * 请按要求完善1和2部分代码
 * 要求：
 * 1.可以扩充 class 的成员变量或函数
 * 2.源数据很少变动
 * 3.模块会被嵌入多个页面，页面路由会多次刷新
 */
export interface TreeNode {
  // 点位id
  id: string
  // 标题
  title: string
  // 是否可用
  enabled: boolean
  // 层级
  level: number
  // 父级点位id
  pid: string
  // 祖先节点路径
  ancestors: string[]
  // 子结点
  children: GuessMapContext[]
}

const arrToTree = (arr: GuessArrayContext[]): GuessMapContext | null => {
  // 1.请完善该函数，将数组转换为树形结构
  if (arr.length === 0) return null
  const root: GuessMapContext = {
    id: '',
    children: [],
  };
  const map: Map<string, GuessMapContext> = new Map();
  for (const item of arr) {
    const { id, pid } = item;
    const node: GuessMapContext = {
      id,
      children: [],
    };
    map.set(id, node);
    if (pid === '') {
      root.children.push(node);
    } else {
      const parent = map.get(pid);
      if (parent) {
        parent.children.push(node);
      }
    }
  }
  return root
}

// 按需取用
type CreateParams = Pick<TreeNode, 'title' | 'pid'> & Partial<TreeNode>

// 假设得到的 arr 是这样的
type GuessArrayContext = Pick<TreeNode, 'id' | 'pid'> & Partial<TreeNode>

type GuessMapContext = Pick<TreeNode, 'id' | 'children'> & Partial<TreeNode>

export default class Tree {
  treeData: GuessArrayContext[];
  dataMap: GuessMapContext | null;
  constructor() {
    this.treeData = []
    this.dataMap = null
  }

  async fetchData(query: Record<string, unknown> = {}) {
    // 2. 完善该函数，要求：
    // 1）从 fetchArrayData 接口获取数据，通过 arrToTree 转换为树形结构，存储到 dataMap 中
    // 2）数据可以一次获取全部，数据量较大
    const arr = await fetchArrayData();
    if (this.dataMap === null) {
      this.dataMap = arrToTree(arr);
    } else {
      // this.dataMap = arrToTree(arr);
      // updateMap(this.dataMap, arr);
    }
  }
  static modelName = 'some-tree-model'
}

// test code
const tree = new Tree()
console.log(tree);

tree.fetchData().then(() => {
  console.log(JSON.stringify(tree));
})