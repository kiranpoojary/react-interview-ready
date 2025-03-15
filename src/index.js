import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./Dashboard";
import AppDuplicate from "./ErrorBoundary/AppDuplicate";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Login } from "./Login";
import MasterLayout from "./MasterLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Ooops</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Ooops</h1>,
  },
  {
    path: "/signup",
    element: <h1>Signup Page Here</h1>,
    errorElement: <h1>Ooops</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <h1>Ooops</h1>,
  },
  {
    path: "/admin",
    // element: <MasterLayout />,
    children: [
      {
        path: "category",
        element: <MasterLayout />,
        children: [
          { path: "add-category", element: <h1>Add Category</h1> },
          { path: "add-sub-category", element: <h1>Add Sub Category</h1> },
        ],
      },
      {
        path: "products",
        element: <h1>Products Management</h1>,
        errorElement: <h1>Ooops</h1>,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    {/* <StrictMode> */}
    <RouterProvider router={routes} />
    {/* <ErrorBoundary>
      <AppDuplicate />
    </ErrorBoundary> */}
    {/* </StrictMode> */}
  </>
);
