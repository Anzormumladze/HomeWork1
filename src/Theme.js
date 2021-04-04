import React, { useState } from "react";

const Theme = () => {
  const [colors, setColor] = useState("#1a0000");

  return (
    <div style={{ marginTop: 50 }}>
      <div style={{ color: colors }}>COLOR</div>
      <button onClick={() => setColor("#CD5C5C")}>IndianRed </button>
      <button onClick={() => setColor("#F08080")}>LightCoral</button>
      <button onClick={() => setColor("#FA8072")}>Salmon</button>
      <button onClick={() => setColor("#E9967A")}>DarkSalmon</button>
      <button onClick={() => setColor("#FFA07A")}>LightSalmon</button>
      <button onClick={() => setColor("#FF0000")}>Red</button>
      <button onClick={() => setColor("#800000")}>Maroon</button>
      <button onClick={() => setColor("#FFFF00")}>Yellow</button>
    </div>
  );
};

export default Theme;
