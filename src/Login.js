// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name } = Object.fromEntries(formData);

    // navigate("/dashboard", { state: { name } });
  }

  return (
    <form onSubmit={onLogin}>
      <h1>Login</h1>
      {/* The input has a name attribute so it can be captured by FormData */}
      <input id="name" name="name" type="text" placeholder="Enter Name" />
      <button type="submit">Login Now</button>
      &nbsp;
      <button
        type="submit"
        onClick={() => {
          navigate("/", { state: { landOn: "REACT_ROUTING" } });
        }}
      >
        &lt;&lt;&nbsp;Back
      </button>
    </form>
  );
}
