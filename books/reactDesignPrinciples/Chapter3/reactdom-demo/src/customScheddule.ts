import {
  unstable_IdlePriority as IdlePriority,
  unstable_ImmediatePriority as ImmediatePriority,
  unstable_LowPriority as LowPriority,
  unstable_NormalPriority as NormalPriority,
  unstable_UserBlockingPriority as UserBlockingPriority,
  unstable_getFirstCallbackNode as getFirstCallbackNode,
  unstable_scheduleCallback as scheduleCallback,
  unstable_shouldYield as shouldYield,
  unstable_cancelCallback as cancelCallback,
} from "scheduler";

type Priority =
  | typeof IdlePriority
  | typeof ImmediatePriority
  | typeof LowPriority
  | typeof NormalPriority
  | typeof UserBlockingPriority

interface Work {
  priority: Priority;
  count: number;
}

const priority2UseList: Priority[] = [
  ImmediatePriority,
  UserBlockingPriority,
  NormalPriority,
  LowPriority
];

const priority2Name = [
  "noop",
  "ImmediatePriority",
  "UserBlockingPrority",
  "NormalPriority",
  "LowPriority",
  "IdlePriority"
]

// console.log({ priority2UseList });

const root = document.querySelector("#root-scheduler") as Element;
const contentBox = document.querySelector("#content") as Element;

const workList: Work[] = [];

let prevPriority: Priority = IdlePriority;
let curCallback: null;

// 初始化优先级对应按钮
priority2UseList.forEach((priority) => {
  const btn = document.createElement("button");
  root.appendChild(btn);
  btn.innerText = priority2Name[priority];

  btn.onclick = () => {
    // 插入 work
    workList.push({
      priority,
      count: 100,
    });
    scheduler();
  }
})

/**
 * 调度的逻辑
 */
function scheduler() {
  // 当前可能存在正在调度的回调
  const cbNode = getFirstCallbackNode();
  // 取出优先级最高的 work
  const curWork = workList.sort((w1, w2) => {
    return w1.priority - w2.priority;
  })[0];

  if (!curWork) {
    // 没有 work 需要执行，退出调度
    curCallback = null;
    cbNode && cancelCallback(cbNode);
    return;
  }

  const { priority: curPriority } = curWork;

  if (curPriority === prevPriority) {
    // 有 work 在进行，比较该 work 与正在进行的 work 的优先级
    // 如果优先级相同，则退出调度
    return;
  }

  // 准备调度当前优先级最高的 work
  // 调度之前，如果 work 正在进行，则中断它
  cbNode && cancelCallback(cbNode);

  // 调度当前优先级最高的 work
  curCallback = scheduleCallback(curPriority, perform.bind(null, curWork));
}

// 执行具体的 work
function perform(work: Work, didTimeout?: boolean): any {
  // 是否需要同步执行，满足 1、work 是同步优先级 2、当前调度的任务已经过期，需要同步执行
  const needSync = work.priority === ImmediatePriority || didTimeout;

  while ((needSync || !shouldYield()) && work.count) {
    work.count--;
    // 执行具体的工作
    insertItem(work.priority + "");
  }
  prevPriority = work.priority;

  if (!work.count) {
    // 从 workList 中删除已完成的 work
    const workIndex = workList.indexOf(work);
    workList.splice(workIndex, 1);
    // 重置优先级
    prevPriority = IdlePriority;
  }

  const prevCallback = curCallback;
  // 调度完成后，如果 callback 变化，代表这是新的 work
  scheduler();
  const newCallback = curCallback;

  if (newCallback && prevCallback === newCallback) {
    // callback 没变，代表是同一个 work，只不过时间切片时间用尽（5ms）
    // 返回的函数会被 Scheduler 继续调用
    return perform.bind(null, work);
  }
}


const insertItem = (content: string) => {
  const ele = document.createElement("span");
  ele.innerText = `${content}`;
  ele.className = `pri-${content}`;
  doSomeBuzyWork(10000000);
  contentBox.appendChild(ele);
}

const doSomeBuzyWork = (len: number) => {
  let result = 0;
  while (len--) {
    result += len;
  }
}

// 理解：优先级设计

