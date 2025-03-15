import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const BuggyComponent = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("Oops! Something went wrong.");
  }

  return <button onClick={() => setError(true)}>Trigger Error</button>;
};

const AppDuplicate = () => {
  return (
    <div>
      <h1>React Error Boundary Example</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default AppDuplicate;
