let callbackNode: NodeJS.Timeout | number | null = null;
let workInProgressHook: Hook | undefined;
let isMount = true;

type Action<T> = (prev: T) => T;

interface Fiber {
  memoizedState?: Hook;
  stateNode: () => { click: () => void };
}

interface Hook {
  queue: Queue;
  memoizedState: number;
  next: Hook | undefined;
}

interface Update {
  action: Action<number>;
  next?: Update;
}

interface Queue {
  pending?: Update;
}

// ------------------------------------------------------------

function App() {
  const [count, setCount] = useState(0);
  console.log(`${isMount ? "mount" : "update"} count: ${count}`);
  return {
    click() {
      setCount(count => count + 1);
    }
  }
}

// ------------------------------------------------------------
const fiber: Fiber = {
  memoizedState: undefined,
  stateNode: App,
};

function schedule() {
  if (callbackNode) {
    clearTimeout(callbackNode);
  }
  callbackNode = setTimeout(() => {
    workInProgressHook = fiber.memoizedState;
    globalThis.app = fiber.stateNode();
    isMount = false;
  });
}

function dispatchSetState(queue: Queue, action: Action<number>) {
  const update: Update = {
    action,
    next: undefined
  };
  if (!queue.pending) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule();
}

function useState(initialValue: number): [number, (action: Action<number>) => void] {
  let hook: Hook;

  if (isMount) {
    hook = {
      queue: { pending: undefined },
      memoizedState: initialValue,
      next: undefined
    }
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      (workInProgressHook as Hook).next = hook;
    }
    (workInProgressHook as Hook) = hook;
  } else {
    hook = workInProgressHook as Hook;
    workInProgressHook = (workInProgressHook as Hook).next;
  }

  if (!hook) {
    throw new Error("hook is undefined");
  }

  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate?.action;
      if (action) {
        baseState = action(baseState);
      }
      firstUpdate = firstUpdate?.next;
    } while (firstUpdate !== hook.queue.pending);
    hook.queue.pending = undefined;
  }
  hook.memoizedState = baseState;
  return [baseState, dispatchSetState.bind(null, hook.queue)];
}