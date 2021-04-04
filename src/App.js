import React from "react";
import Message from "./Message";
import Counter from "./Counter";
import Theme from "./Theme";

const App = () => {
  return (
    <div>
      <Message greeting="Hello User Welcome to Spaceship where you can add or Subtraction" />
      <Counter />
      <Theme />
    </div>
  );
};

export default App;
