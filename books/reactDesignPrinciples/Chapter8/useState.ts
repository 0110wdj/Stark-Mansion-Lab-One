let callbackNode: NodeJS.Timeout | number | null = null;
let workInProgressHook: Hook | undefined;
let isMount = true;

type Action = (prev: any) => void;

interface Fiber {
  memoizedState?: Hook;
  stateNode: () => { click: () => void };
}

interface Hook {
  queue: Queue;
  memoizedState: any;
  next: Hook;
}

interface Update {
  action: Action;
  next?: Update;
}

interface Queue {
  pending: Update;
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

function dispatchSetState(queue: Queue, action: Action) {
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

function useState(initialValue: any) {
  let hook;

  if (isMount) {
    hook = {
      queue: { pending: undefined },
      memoizedState: initialValue,
      next: null
    }
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      (workInProgressHook as Hook).next = hook;
    }
    (workInProgressHook as Hook) = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = (workInProgressHook as Hook).next;
  }

  if (!hook) {
    throw new Error("hook is undefined");
  }

  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending);
    hook.queue.pending = undefined;
  }
  hook.memoizedState = baseState;
  return [baseState, dispatchSetState.bind(null, hook.queue)];
}