// Create a hook to easily use setTimeout(callback, delay).

// 1. reset the timer if delay changes
// 2. DO NOT reset the timer if only callback changes
import React, { useEffect, useRef } from 'react';

export function useTimeout(callback, delay) {

  const callbackRef = useRef(callback)
  callbackRef.current = callback;

  useEffect(() => {
    const id = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(id)
  }, [delay])
}

export function App() {
  return <div>your app</div>
}
