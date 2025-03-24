import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function MasterLayout() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ border: "1px solid red", height: "10vh", width: "100vw" }}>
        Header
        <div>back</div>
        &nbsp;
        <button
          type="submit"
          onClick={() => {
            navigate("/", { state: { landOn: "REACT_ROUTING" } });
          }}
        >
          &lt;&lt;&nbsp;Back
        </button>
      </div>
      <div
        style={{
          outline: "1px solid red",
          height: "80vh",
          width: "100vw",
          display: "flex",
          direction: "row",
        }}
      >
        <div
          style={{ outline: "1px solid red", height: "80vh", width: "10vw" }}
        >
          SIDER
        </div>
        <div style={{ height: "80vh", width: "90vw" }}>
          <Outlet />
        </div>
      </div>
      <div style={{ border: "1px solid red", height: "10vh", width: "100vw" }}>
        Footer
      </div>
    </div>
  );
}

export default MasterLayout;
