import React, { memo } from "react";
import { useState } from "react";
import { Child } from "./Child";

const InternalChild = memo(({ count }) => {
  return <h1>Count in Internal Child {count}</h1>;
});

export function StatePropsParent() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <InternalChild count={count} />
      <Child count={count} />
      <h1>Count in Parent {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Parent Count</button>
    </React.Fragment>
  );
}
