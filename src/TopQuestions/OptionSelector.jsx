import React, { useState } from "react";

const checkBoxData = [
  {
    id: 1,
    name: "Frontend",
    children: [
      {
        id: 2,
        name: "HTML",
      },
      {
        id: 3,
        name: "CSS",
        children: [
          {
            id: 4,
            name: "CSS3",
          },
          {
            id: 5,
            name: "SCSS",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Backend",
    children: [
      {
        id: 7,
        name: "Nodejs",
        children: [
          {
            id: 8,
            name: "express",
          },
          {
            id: 9,
            name: "Nest",
          },
        ],
      },
      {
        id: 10,
        name: "Java",
        children: [
          {
            id: 11,
            name: "SpringBoot",
          },
          {
            id: 12,
            name: "Hibernate",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Database",
    children: [
      {
        id: 14,
        name: "MongoDB",
      },
      {
        id: 15,
        name: "Postgres",
      },
      {
        id: 16,
        name: "MSSql",
      },
    ],
  },
  { id: 17, name: "Git and GitHub" },
];

export default function OptionSelector() {
  const [checkedHistory, setCheckedHistory] = useState({});
  return (
    <div>
      <CheckBoxHeirarchy
        data={checkBoxData}
        checkedHistory={checkedHistory}
        setCheckedHistory={setCheckedHistory}
      />
      {JSON.stringify(checkedHistory)}
    </div>
  );
}

function CheckBoxHeirarchy({ data, checkedHistory, setCheckedHistory }) {
  function onCheckChange(isChecked, node) {
    setCheckedHistory((prev) => {
      let newCheckHistory = { ...prev, [node.id]: isChecked };

      function checkChilds(node) {
        node?.children?.forEach((child) => {
          newCheckHistory[child.id] = isChecked;
          child?.children && checkChilds(child);
        });
      }

      checkChilds(node);

      function isAllChildChecked(node) {
        if (!node?.children) return newCheckHistory[node.id] || false;
        let allChildChecked = true;
        for (const ch of node.children) {
          const result = isAllChildChecked(ch);
          if (!result) {
            allChildChecked = false;
          }
        }
        newCheckHistory[node.id] = allChildChecked;
        return allChildChecked;
      }
      checkBoxData?.forEach((d) => isAllChildChecked(d));
      return newCheckHistory;
    });
  }

  return (
    <>
      {data?.map((node) => (
        <div key={node?.id} className="options-container">
          <input
            type="checkbox"
            checked={checkedHistory[node.id]}
            onChange={(e) => onCheckChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node?.children && (
            <CheckBoxHeirarchy
              data={node.children}
              checkedHistory={checkedHistory}
              setCheckedHistory={setCheckedHistory}
            />
          )}
        </div>
      ))}
    </>
  );
}
