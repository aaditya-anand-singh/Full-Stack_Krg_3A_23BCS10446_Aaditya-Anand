import React from "react";

const CounterDisplay = React.memo(({ count, goal }) => {
  console.log("CounterDisplay rendered");

  return (
    <div>
      <h3>{count} / {goal} glasses completed</h3>
      {count >= goal && <p className="success">Goal Reached 🎉</p>}
    </div>
  );
});

export default CounterDisplay;