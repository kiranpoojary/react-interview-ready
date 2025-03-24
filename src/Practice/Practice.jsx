import React, { useState } from "react";
import json from "./fileinfo.json";
const container = {
  textAlign: "left",
  paddingLeft: "20px",
};

function FileList({ items }) {
  const [expanded, setExpanded] = useState({});
  return (
    <div style={container}>
      {items?.map((item, ind) => (
        <>
          <div style={{ display: "flex" }}>
            {item?.type == "folder" &&
              (expanded?.[item.id] ? (
                <div
                  onClick={() =>
                    setExpanded((prev) => ({ ...prev, [item?.id]: false }))
                  }
                >
                  -
                </div>
              ) : (
                <div
                  onClick={() => {
                    setExpanded((prev) => ({ ...prev, [item?.id]: true }));
                  }}
                >
                  +
                </div>
              ))}
            {item?.name}
          </div>
          <div>
            {item?.children && expanded?.[item?.id] && (
              <FileList items={item?.children} />
            )}
          </div>
        </>
      ))}
    </div>
  );
}

function Practice() {
  const [data, setData] = useState(json);
  return (
    <div>
      <FileList items={data} />
    </div>
  );
}

export default Practice;
