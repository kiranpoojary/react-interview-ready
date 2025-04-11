import React, { useState, useRef } from "react";

function DebounceThrottle() {
  const [debounceRequests, setDebounceRequests] = useState([]);
  const [throttleRequests, setThrottleRequests] = useState([]);
  const lastCalledTime = useRef(0); // to persist across renders

  function debouncer(fn, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  function throttler(fn, delay) {
    return function (...args) {
      let nowTime = new Date().getTime();
      if (nowTime - lastCalledTime.current < delay) return;
      lastCalledTime.current = nowTime;
      fn(...args);
    };
  }

  const debouncedSearch = debouncer(function (e) {
    setDebounceRequests((prev) => [...prev, e?.target.value]);
  }, 300);

  const throttledSearch = throttler(function (e) {
    setThrottleRequests((prev) => [...prev, e?.target?.value]);
  }, 300);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: "60vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          border: "0.5px solid grey",
          padding: "1rem",
          width: "30vw",
          overflow: "scroll",
        }}
      >
        <h2>Debouncing</h2>
        <div>
          <input
            id="debounce"
            type="text"
            placeholder="Search.."
            onChange={(e) => debouncedSearch(e)}
          />
        </div>
        {debounceRequests?.map((txt, i) => (
          <div>Seached:&nbsp;{txt}</div>
        ))}
      </div>
      <button
        style={{ height: "2rem" }}
        onClick={() => {
          setDebounceRequests([]);
          setThrottleRequests([]);
          document.getElementById("debounce").value = "";
          document.getElementById("throttle").value = "";
        }}
      >
        clear
      </button>
      <div
        style={{
          border: "0.5px solid grey",
          padding: "1rem",
          width: "30vw",
          overflow: "scroll",
        }}
      >
        <h2>Throttling</h2>
        <div>
          <input
            id="throttle"
            type="text"
            placeholder="Search.."
            onChange={(e) => throttledSearch(e)}
          />
        </div>
        {throttleRequests?.map((txt, i) => (
          <div>Seached:&nbsp;{txt}</div>
        ))}
      </div>
    </div>
  );
}

export default DebounceThrottle;
