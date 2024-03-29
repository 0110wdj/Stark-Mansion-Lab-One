let firstMount = true
const _renderApp = () => { }

const useCustomState = (initState) => {
  let state = typeof initState === 'function' ? initState() : initState;
  let hook;
  if (firstMount) {
    hook = {
      memoizedState: state,
      next: null
    }
    let queue = {
      pending: null,
      lanes: null,
      next: null
    }
    hook.queue = queue
    if (!fiber.memoizedState) {
      fiber.memoizedState = workInProgressHook = hook;
    }

    workInProgressHook = workInProgressHook.next = hook
  }
  return [hook.memoizedState, dispatchAction.bind(null, hook)]
}

// const dispatchAction(hook, action) = () => { }
const dispatchAction = (hook, action) => {
  let update = {
    action,
    next: null
  }
  const pending = hook.queue.pending

}