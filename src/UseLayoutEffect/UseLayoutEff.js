import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

function UseLayoutEff() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   let start = 0;
  //   while (start < 2000) {
  //     ++start;
  //     console.log();
  //   }
  //   const { width, height } = divRef.current.getBoundingClientRect();
  //   setDimensions({ width, height });
  // }, []);

  useLayoutEffect(() => {
    let start = 0;
    while (start < 4000) {
      ++start;
      console.log();
    }
    const { width, height } = divRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: dimensions.width > 50 ? "lightgreen" : "lightblue",
        }}
      >
        Measured Div
      </div>
      <p>
        Dimensions: {dimensions.width}px x {dimensions.height}px
      </p>
    </div>
  );
}

export default UseLayoutEff;
