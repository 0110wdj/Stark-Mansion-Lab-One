type ReactNodeList = ReactNode[];
type Flag = "Placement" | "Deletion";

interface ReactNode {
  key: string;
  flags?: Flag;
  index?: number;
}

// Diff 算法
function diff(before: ReactNodeList, after: ReactNodeList): ReactNodeList {
  let lastPlacedIndex = 0;
  const result: ReactNodeList = [];

  const beforeMap = new Map<string, ReactNode>();
  before.forEach((node, i) => {
    node.index = i;
    beforeMap.set(node.key, node);
  });


  for (let i = 0; i < after.length; i++) {
    const afterNode = after[i];
    afterNode.index = i;
    const beforeNode = beforeMap.get(afterNode.key);
    if (beforeNode) {
      beforeMap.delete(beforeNode.key);
      const oldIndex = beforeNode.index as number;
      if (oldIndex < lastPlacedIndex) {
        afterNode.flags = "Placement";
        result.push(afterNode);
        continue;
      }
      lastPlacedIndex = oldIndex;
    } else {
      afterNode.flags = "Placement";
      result.push(afterNode);
    }
  }

  for (const node of beforeMap.values()) {
    node.flags = "Deletion";
    result.push(node);
  }

  return result;
}