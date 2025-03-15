import { Categories } from "./Categories";
import { ContextProvider } from "./ContextProvider";
import { Products } from "./Products";

export function Parent() {
  return (
    <>
      <ContextProvider>
        <Products />
        <Categories />
      </ContextProvider>
    </>
  );
}
