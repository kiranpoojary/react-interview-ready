import { useMemo, useState } from "react";

function ExpensiveCalcComponent({ count }) {
  const exp = useMemo(() => {
    console.log("expensive....");
    return count;
  }, [count]);

  return <h3>{exp}</h3>;
}

export function Memoize() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ExpensiveCalcComponent count={count} />
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
