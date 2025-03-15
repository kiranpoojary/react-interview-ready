import { useContext } from "react";
import { Categories } from "./Categories";
import { Context } from "./ContextProvider";

export function Products() {
  const { store, setStore } = useContext(Context);
  return (
    <>
      <div style={{ border: "1px solid red", margin: "2rem" }}>
        <h2>Products Quantity : {store?.prodQty}</h2>{" "}
        <h2>Category Quantity : {store?.catQty}</h2>
        <Categories />
        <button
          onClick={() => setStore({ ...store, prodQty: store?.prodQty + 1 })}
        >
          Add Product Quantity
        </button>
      </div>
    </>
  );
}
