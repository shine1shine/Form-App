import React from "react";
import { useState } from "react";

export default function Countercomponent() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");

    return storedCount ? parseInt(storedCount) : 0;
  });

  const handleAddClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  const handleRemoveClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;

      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleRemoveClick}>-</button>
        {count}
        <button onClick={handleAddClick}>+</button>
      </div>
    </div>
  );
}
