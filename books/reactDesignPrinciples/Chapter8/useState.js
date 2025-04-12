/**
 * @typedef {Object} Update
 * @property {function(number): number} action - 状态更新函数
 * @property {Update} [next] - 下一个更新
 */

/**
 * @typedef {Object} Queue
 * @property {Update} [pending] - 待处理的更新
 */

/**
 * @typedef {Object} Hook
 * @property {Queue} queue - 更新队列
 * @property {number} memoizedState - 当前状态值
 * @property {Hook} [next] - 下一个 Hook
 */

/**
 * @typedef {Object} Fiber
 * @property {Hook} [memoizedState] - 当前 Hook
 * @property {function(): {click: function(): void}} stateNode - 组件函数
 */

// 全局变量
/** @type {NodeJS.Timeout | number | null} */
let callbackNode = null; // 用于存储 setTimeout 的返回值，用于取消调度
/** @type {Hook | undefined} */
let workInProgressHook = undefined; // 当前正在处理的 Hook
/** @type {boolean} */
let isMount = true; // 标记是否是首次渲染

/**
 * App 组件
 * 模拟 React 函数组件，使用 useState 管理状态
 * @returns {{click: function(): void}} 返回包含 click 方法的对象
 */
function App() {
    // 使用 useState 创建状态，初始值为 20
    const [count, setCount] = useState(20);
    // 根据 isMount 状态输出不同的日志
    console.log(`${isMount ? "mount" : "update"} count: ${count}`);
    return {
        // 返回一个包含 click 方法的对象，用于触发状态更新
        click() {
            setCount(count => count + 1);
        }
    }
}

/**
 * Fiber 结构
 * 模拟 React 的 Fiber 架构，用于管理组件状态和更新
 * @type {Fiber}
 */
const fiber = {
    memoizedState: undefined, // 存储组件的 Hook 链表
    stateNode: App, // 组件函数
};

/**
 * 调度函数
 * 模拟 React 的调度机制，用于处理状态更新
 * 使用 setTimeout 模拟 React 的异步更新机制
 */
function schedule() {
    // 如果已经有待处理的更新，先清除
    if (callbackNode) {
        clearTimeout(callbackNode);
    }
    // 使用 setTimeout 模拟异步更新
    callbackNode = setTimeout(() => {
        // 准备处理 Hook
        workInProgressHook = fiber.memoizedState;
        // 执行组件函数，获取新的状态
        window.app = fiber.stateNode();
        // 标记首次渲染完成
        isMount = false;
    });
}

/**
 * 状态更新函数
 * 模拟 React 的 setState 实现，用于创建更新并触发调度
 * @param {Queue} queue - 更新队列
 * @param {function(number): number} action - 更新函数
 */
function dispatchSetState(queue, action) {
    // 创建新的更新对象
    const update = {
        action,
        next: undefined
    };
    // 将更新添加到队列中
    if (!queue.pending) {
        // 如果队列为空，创建一个循环链表
        update.next = update;
    } else {
        // 如果队列不为空，将新更新插入到队列中
        update.next = queue.pending.next;
        queue.pending.next = update;
    }
    // 更新队列的 pending 指针
    queue.pending = update;
    // 触发调度
    schedule();
}

/**
 * useState 实现
 * 模拟 React 的 useState Hook，用于管理组件状态
 * 实现原理：
 * 1. 首次渲染时创建 Hook 对象并初始化状态
 * 2. 后续渲染时复用已有的 Hook 对象
 * 3. 处理待执行的更新，计算新的状态值
 * @param {number} initialValue - 初始状态值
 * @returns {[number, function(function(number): number): void]} 返回状态值和更新函数
 */
function useState(initialValue) {
    /** @type {Hook} */
    let hook;

    if (isMount) {
        // 首次渲染，创建新的 Hook 对象
        hook = {
            queue: { pending: undefined },
            memoizedState: initialValue,
            next: undefined
        }
        // 将 Hook 添加到 Fiber 的 Hook 链表中
        if (!fiber.memoizedState) {
            fiber.memoizedState = hook;
        } else {
            workInProgressHook.next = hook;
        }
        workInProgressHook = hook;
    } else {
        // 后续渲染，复用已有的 Hook 对象
        hook = workInProgressHook;
        workInProgressHook = workInProgressHook.next;
    }

    if (!hook) {
        throw new Error("hook is undefined");
    }

    // 计算新的状态值
    let baseState = hook.memoizedState;
    if (hook.queue.pending) {
        // 处理待执行的更新
        let firstUpdate = hook.queue.pending.next;
        do {
            const action = firstUpdate?.action;
            if (action) {
                // 执行更新函数，计算新的状态值
                baseState = action(baseState);
            }
            firstUpdate = firstUpdate?.next;
        } while (firstUpdate !== hook.queue.pending);
        // 清空更新队列
        hook.queue.pending = undefined;
    }
    // 更新 Hook 的状态值
    hook.memoizedState = baseState;
    // 返回状态值和更新函数
    return [baseState, dispatchSetState.bind(null, hook.queue)];
}

// 初始化，触发首次渲染
schedule(); 