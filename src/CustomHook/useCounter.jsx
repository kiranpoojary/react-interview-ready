import { useState } from "react";

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  function incCount(val) {
    setCount((count) => count + val);
  }

  function decCount(val) {
    setCount((count) => count - val);
  }

  return { count, incCount, decCount };
}
