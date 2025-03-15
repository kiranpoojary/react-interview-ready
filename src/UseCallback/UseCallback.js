import React, { useState, useCallback } from "react";

// Child component that receives an increment function as a prop
const ListItem = React.memo(({ item, onIncrement }) => {
  console.log("Rendering item:", item.id);
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => onIncrement(item.id)}>Increment</button>
      <span> Count: {item.count}</span>
    </div>
  );
});

const UseCallback = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", count: 0 },
    { id: 2, name: "Item 2", count: 0 },
    { id: 3, name: "Item 3", count: 0 },
  ]);

  const incrementCount = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  // use the below function instead of above one and see log for difference on each increment clicks
  // const incrementCount = (id) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, count: item.count + 1 } : item
  //     )
  //   );
  // };

  return (
    <div>
      <h1>Item List</h1>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onIncrement={incrementCount} />
      ))}
    </div>
  );
};

export default UseCallback;
