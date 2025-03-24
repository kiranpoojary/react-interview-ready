import React, { useState } from "react";

function DebounceThrottle() {
  const [debounceRequests, setDebounceRequests] = useState([]);
  const [throttleRequests, setThrottleRequests] = useState([]);

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
    let lastCalled = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCalled >= delay) {
        lastCalled = now;
        fn(...args);
      }
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
            type="text"
            placeholder="Search.."
            onChange={(e) => debouncedSearch(e)}
          />
        </div>
        {debounceRequests?.map((txt, i) => (
          <div>Seached:&nbsp;{txt}</div>
        ))}
      </div>
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
