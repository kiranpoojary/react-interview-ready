import { useState, useEffect, useRef } from "react";

export function UseRef() {
  const nameRef = useRef(null);
  const pswRef = useRef(null);
  const headingRef = useRef(null);
  const prevCountRef = useRef();
  const divRef = useRef();

  function onBtn(ref) {
    ref.current.focus();
  }

  const [count, setCount] = useState(0);
  const [divData, setDivData] = useState({});

  useEffect(() => {
    prevCountRef.current = count; // Store the previous count value
  }, [count]);

  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, []);

  function changeColor() {
    console.log([Math.floor(Math.random() * 10) % 4]);
    headingRef.current.style.color = ["red", "green", "yellow", "cyan"][
      [Math.floor(Math.random() * 10) % 4]
    ];
  }

  const handleClick = () => {
    const userId = divRef.current.dataset.userId;
    const userRole = divRef.current.dataset.userRole;
    setDivData({ userId, userRole });
  };

  return (
    <>
      <h1 ref={headingRef}>useRef</h1>
      <button onClick={() => changeColor()}>Change Color</button>
      <h3>Accessing DOM Elements</h3>
      <div>
        <input ref={nameRef} placeholder="User Name" />
        <input ref={pswRef} placeholder="Password" />
      </div>

      <br />
      <button onClick={() => onBtn(nameRef)}>Focus User Name</button>
      <button onClick={() => onBtn(pswRef)}>Focus Password</button>

      <hr />
      <div>
        {/* Assign data attributes to the div */}
        <div ref={divRef} data-user-id="12345" data-user-role="admin">
          Data Info :{JSON.stringify(divData)}
        </div>

        {/* Button to trigger the access of data attributes */}
        <button onClick={handleClick}>Access Div Dataset</button>
      </div>
      <br />

      <hr />
      <h3>Storing Mutable Values That Don’t Trigger Re-renders</h3>
      <h3>Current Count: {count}</h3>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <h3>Handling Interval and Timeout IDs</h3>
      <div>Timer: {seconds} seconds</div>
    </>
  );
}
