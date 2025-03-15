import { useLocation } from "react-router-dom";

export function Dashboard() {
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {name ? <p>Hello, {name}!</p> : <p>No name provided</p>}
    </div>
  );
}
