# React Guide

## Debouncing Search

```jsx
import { useState, useEffect, useCallback } from "react";

function handleSearch(search) {
    setQueryParams({ ...queryParams, search });
    console.log({ search });
}

const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

<Input onChange={(e) => {
    debouncedHandleSearch(e.target.value);
}}>
```

---

## Setting Up a React Project

```sh
npm create vite@latest project-name
```
Choose: `react -> javascript -> npm i -> npm run dev`

### Project Cleanup
- Remove all default CSS in `app.css` and `index.css`
- From `main.jsx`, remove `<App/>` and add router configuration below

### 📂 Project Structure
```
src/
│── components/
│   ├── Header.js
│   ├── Sidebar.js
│   ├── MasterLayout.js
│── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│── App.js
│── index.js
```

---

## React Router (Important Imports)

```js
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link,
    useLocation,
    useNavigate,
    Router,
    Routes,
    Route
} from "react-router-dom";
```

### Adding a New Stylesheet to a Component
```js
import "./LoginStyle.css";
```

---

## MasterLayout + Pages

### `main.js`
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Masterlayout from "./Masterlayout.jsx";

const routes = createBrowserRouter([
    { path: "/", element: <h1>Welcome</h1>, errorElement: <h1>404</h1> },
    { path: "/login", element: <h1>Login page</h1> },
    { path: "/signup", element: <h1>Signup Page</h1> },
    {
        path: "/admin",
        element: <Masterlayout />, // Admin layout
        children: [
            { path: "profile", element: <h1>Admin Profile</h1> },
            { path: "post", element: <h1>Admin Post</h1> },
            {
                path: "friends",
                children: [{ path: "close", element: <h1>Close Friends</h1> }],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
```

---

## MasterLayout Component

### `MasterLayout.js`
```jsx
import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Masterlayout() {
    const loc = useLocation();

    useEffect(() => {
        console.log(loc);
    }, []);

    return (
        <div style={{ border: "1px solid red" }}>
            <div>
                <h5>Sidebar Component</h5>
                <Link to="/admin/post">Post</Link>
            </div>
            <div>
                <h5>Header Component</h5>
                <Link to="/admin/profile">Profile</Link>
            </div>
            <div>
                <h5>Close Friends</h5>
                <Link to="/admin/friends/close">Close Friends</Link>
            </div>
            <Outlet />
        </div>
    );
}
export default Masterlayout;
```

---

## Passing State with Links

### Passing State from Element on Link Click
```jsx
<Link to="/profile" state={{ userId: 123, from: "Home" }}>
```

### Getting State in Navigated Component
```js
const location = useLocation();
const userData = location.state; // Getting the state data
```

### Passing State Programmatically
```js
const navigate = useNavigate();

const goToProfile = () => {
    navigate("/profile", {
        state: { userId: 123, from: "Home Page" },
    });
};
```

---

## Hooks and Usage

### `useRef`
- Direct DOM manipulation (`ref.current.focus()`)
- Store values across renders without triggering a re-render
- Track previous values

### `useReducer`
- When state update logic is complex
- When state updates depend on the previous state
- Easy for data management

### `useContext`
- Share states across nested components without props drilling
- Share common app data like theme, user details

### `useMemo`
- Optimize performance by memoizing computed values
- Prevent expensive recalculations on every render

### `useCallback`
- Memoize a function to maintain reference stability across renders

### `useLayoutEffect`
- Runs synchronously after DOM mutations and before the browser paints
- Useful for measuring DOM elements before rendering

---

## Handling Form Data
```js
function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, psw } = Object.fromEntries(formData.entries());
    ......
}
```

---

## Sample Interview Implementation Questions

- Create a simple counter component with increment and decrement buttons.
- Build a todo list app with add, complete, and delete functionalities.
- Implement a modal component with open/close functionality.
- Create a search filter component that filters a list of items dynamically.
- Build a form with email and password fields, implementing validation.
- Pass data from a parent to a child component and update it from the child.
- Implement pagination with "Previous" and "Next" buttons.
- Fetch data from an API and display a loading indicator.
- Implement conditional rendering based on a boolean state.
- Update the document title dynamically based on component state.

---

