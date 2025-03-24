import React, { useState } from "react";
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
  const [data, setData] = useState([
    {
      id: 1,
      name: "root",
      type: "folder",
      children: [],
    },
  ]);

  function onAddFolder(folderName, parentId) {
    function addFolder(items) {
      return items?.map((it) => {
        if (it?.id == parentId) {
          it.children = [
            ...it.children,
            { name: folderName, type: "folder", children: [] },
          ];
          return it;
        } else if (d?.children) {
          it.children = addFolder(it?.children);
          return it;
        } else return it;
      });
    }
    setData(addFolder(data));
  }

  function addFile(fileName, parentId) {
    //
  }

  function deleteFileFolder(id) {
    //
  }

  return (
    <div>
      <FileList items={data} onAddFolder={onAddFolder} />
    </div>
  );
}

export default Practice;
