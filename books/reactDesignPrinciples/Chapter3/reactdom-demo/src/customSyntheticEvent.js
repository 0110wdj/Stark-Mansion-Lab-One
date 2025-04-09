class SyntheticEvent {
  constructor(e) {
    this.nativeEvent = e;
  }

  stopPropagation() {
    this._stopPropagation = true;
    if (this.nativeEvent.stopPropagation) {
      this.nativeEvent.stopPropagation();
    }
  }
}

const triggerEventFlow = (paths, type, se) => {
  for (let i = paths.length - 1; i--;) {
    const pathNode = paths[i];
    const callback = pathNode[type];
    if (callback) {
      callback.call(null, se);
    }
    if (se._stopPropagation) {
      break;
    }
  }
};

const dispatchEvent = (e, type) => {
  const se = new SyntheticEvent(e);
  const ele = e.target;
  let fiber;
  for (const prop in ele) {
    if (prop.toLowerCase().includes('fiber')) {
      fiber = ele[prop];
    }
  }
  const paths = collectPaths(type, fiber);
  triggerEventFlow(paths, `${type}CAPTURE`, se);
  if (!se._stopPropagation) {
    triggerEventFlow(paths.reverse(), type, se);
  }
};

const collectPaths = (type, begin) => {
  const paths = [];
  let current = begin;
  while (current.tag !== 3) {
    const { tag, memoizedProps } = current;
    if (tag === 5) {
      const eventName = `on${type}`;
      if (memoizedProps && Object.keys(memoizedProps).includes(eventName)) {
        const pathNode = {};
        pathNode[type.toUpperCase()] = memoizedProps[eventName];
        paths.push(pathNode);
      }
    }
    current = current.return;
  }
  return paths;
};

export const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    dispatchEvent(e, type.toUpperCase(), container);
  });
};
