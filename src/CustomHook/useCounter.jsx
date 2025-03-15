import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  function incCount(val) {
    setCount((count) => count + val);
  }

  function decCount(val) {
    setCount((count) => count - val);
  }

  return { count, incCount, decCount };
}
