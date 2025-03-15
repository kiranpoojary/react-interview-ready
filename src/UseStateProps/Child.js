import React from "react";

export function Child({ count }) {
  return (
    <React.Fragment>
      <h1>Count in External Child {count}</h1>
    </React.Fragment>
  );
}
