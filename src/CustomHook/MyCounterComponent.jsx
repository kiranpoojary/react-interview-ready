import useCounter from "./useCounter";

export function MyCounterComponent() {
  const { count, incCount, decCount } = useCounter(9);

  return (
    <>
      <h1>Coustom Hook Implementation</h1>
      <button onClick={() => decCount(1)}>-</button>
      {count}
      <button onClick={() => incCount(1)}>+</button>
    </>
  );
}
