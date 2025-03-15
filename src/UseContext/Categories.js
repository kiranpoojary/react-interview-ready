import { useContext } from "react";
import { Context } from "./ContextProvider";

export function Categories() {
  const { store, setStore } = useContext(Context);
  return (
    <>
      <div style={{ border: "1px solid red", margin: "2rem" }}>
        <h2>Category Count : {store?.catQty}</h2>
        <h2>Products Quantity : {store?.prodQty}</h2>
        <button
          onClick={() => setStore({ ...store, catQty: store?.catQty + 1 })}
        >
          Add Category Quantity
        </button>
      </div>
    </>
  );
}
