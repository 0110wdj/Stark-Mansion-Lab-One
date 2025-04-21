import React, { useEffect, useState } from 'react';

function useCount(second, callback) {
  const [count, setCount] = useState(second);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();

  useEffect(() => {
    if (count) {
      setTimeout(() => {
        setCount(p => p - 1);
      }, 1000)
    }
  }, [count])

  // useEffect(() => {
  //   let id = null;

  //   const setTimeoutFunc = () => {
  //     id = setTimeout(() => {
  //       if (count > 0) {
  //         setCount(p => p - 1);
  //         setTimeoutFunc()
  //       } else {
  //         setResult(callback())
  //         setLoading(false)
  //       }
  //     }, 1000)
  //   }

  //   if (!id) {
  //     setTimeoutFunc()
  //   }

  //   return () => {
  //     clearTimeout(id);
  //   }
  // }, [count])

  return [count, loading, result];
}