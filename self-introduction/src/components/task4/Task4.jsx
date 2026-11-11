
import { useState } from "react";
import "./task4.css";

function Task4() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "task4-container dark" : "task4-container light"}>
      <div className="counter-card">

        <h1>Counter Application</h1>
        <p className="subtitle">React useState Hook</p>

        <div className="theme-section">
          <p>Current Theme: {isDark ? "Dark Mode" : "Light Mode"}</p>

          <button className="theme-btn" onClick={toggleTheme}>
            {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        <div className="counter-section">
          <h2>Counter</h2>

          <div className="count-value">{count}</div>

          <div className="counter-buttons">
            <button className="increment-btn" onClick={increment}>
              Increment
            </button>

            <button className="decrement-btn" onClick={decrement}>
              Decrement
            </button>

            <button className="reset-btn" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Task4;
