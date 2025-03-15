import { useReducer } from "react";

export function CounterReducer() {
  const [state, dispatch] = useReducer(changeCount, { count: 0 });

  function changeCount(state, action) {
    if (action.type == "add") {
      return { count: state?.count + 1 };
    } else return { count: state?.count - 1 };
  }
  return (
    <>
      <h1>Counter(Reducer)</h1>
      <button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        -
      </button>
      {state?.count}
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        +
      </button>
    </>
  );
}
