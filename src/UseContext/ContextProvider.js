import { createContext, useState } from "react";
export const Context = createContext("ecom");

export function ContextProvider({ children }) {
  const [store, setStore] = useState({ catQty: 0, prodQty: 0 });
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
}
