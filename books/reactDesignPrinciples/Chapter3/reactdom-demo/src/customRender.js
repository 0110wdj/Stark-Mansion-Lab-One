import ReactReconciler from "react-reconciler";
// 宿主环境的配置项
// /**
//  * @type {ReactReconciler.HostConfig}
//  */
const hostConfig = {
  supportsMutation: true,
  getRootHostContext() { },
  getChildHostContext() { },
  prepareForCommit() { },
  resetAfterCommit() { },
  shouldSetTextContent() { },
  createInstance() { },
  createTextInstance(text) {
    return document.createTextNode(test);
  },
  appendInitialChild() { },
  finalizeInitialChildren() { },
  clearContainer() { },
  appendChild() { },
  appendChildToContainer() { },
  prepareUpdate() { },
  commitUpdate() { },
  commitTextUpdate() { },
  removeChild() { }
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