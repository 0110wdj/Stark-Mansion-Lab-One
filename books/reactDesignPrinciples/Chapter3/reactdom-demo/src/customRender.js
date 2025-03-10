import ReactReconciler from "react-reconciler";
// 宿主环境的配置项
/**
 * @type {ReactReconciler.HostConfig}
 */
const hostConfig = {
  supportsMutation: true,
  getRootHostContext() {
    return {};
  },
  getChildHostContext() {
    return {};
  },
  prepareForCommit: () => true,
  resetAfterCommit() { },
  shouldSetTextContent: (_, props) => {
    return (
      typeof props.children === 'string' || typeof props.children === 'number'
    )
  },
  createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress) {
    /**
     * @type {HTMLElement}
     */
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === 'string' || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else if (propName === 'onClick') {
        console.log("初始化加载 onClick");
        domElement.addEventListener('click', propValue);
      } else if (propName === 'className') {
        domElement.setAttribute("class", propValue);
      } else {
        domElement.setAttribute(propName, propValue);
      }
    })
    return domElement;
  },
  createTextInstance(text) {
    return document.createTextNode(text);
  },
  appendInitialChild(parent, children) {
    parent.appendChild(children)
  },
  finalizeInitialChildren() { },
  clearContainer() { },
  appendChild(parent, children) {
    parent.appendChild(children)
  },
  appendChildToContainer(parent, children) {
    parent.appendChild(children)
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === 'string' || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName]; // 这句可能是不必要的
        domElement.setAttribute(propName, propValue);
      }
    })
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },
  removeChild(parentInstance, children) {
    parentInstance.removeChild(children);
  }
};

// 初始化 ReactReconcoler
const ReactReconcilerInst = ReactReconciler(hostConfig);

const CustomRender = {
  // render 方法
  render: (reactElement, domElement, callback) => {
    // 创建根节点
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(domElement, false);
    }
    return ReactReconcilerInst.updateContainer(reactElement, domElement._rootContainer, null, callback);
  }
}

export default CustomRender;