import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>
        <p>{number}</p>
      </div>
      <button onClick={() => setNumber((prev) => prev + 1)}>+1</button>
      <button onClick={() => setNumber((prev) => prev + 5)}>+5</button>
      <button onClick={() => setNumber((prev) => prev + 100)}>+100</button>
      <button onClick={() => setNumber((prev) => prev - 100)}>-100</button>
      <button onClick={() => setNumber((prev) => prev - 5)}>-5</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>-1</button>
    </div>
  );
};

export default Counter;
