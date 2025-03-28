import React, { useState, useEffect, useRef } from "react";

function OTPComponent({ maxbox = 6, onAllFilled }) {
  const [otpDigits, setOtpDigits] = useState(new Array(maxbox).fill(""));
  const boxRef = useRef([]);

  useEffect(() => {
    boxRef.current[0].focus();
  }, []);

  function changevalue(e, i) {
    const val = e.target.value.trim().slice(-1);
    if (isNaN(val)) return;
    const newDigits = [...otpDigits];
    newDigits[i] = val;
    setOtpDigits(newDigits);
    val && boxRef.current?.[i + 1]?.focus();
    if (val && i == maxbox - 1 && onAllFilled) onAllFilled(newDigits);
  }

  function handleKeyDown(e, i) {
    const val = e.target.value;
    if (!val && e?.key == "Backspace") {
      boxRef.current?.[i - 1]?.focus();
    } else if (e.key == "ArrowLeft") {
      boxRef.current?.[i - 1]?.focus();
    } else if (e.key == "ArrowRight") {
      boxRef.current?.[i + 1]?.focus();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {otpDigits.map((d, i) => (
        <input
          key={i}
          value={otpDigits[i]}
          className="otp-input"
          ref={(inputElement) => (boxRef.current[i] = inputElement)}
          onChange={(e) => changevalue(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}

export default OTPComponent;
