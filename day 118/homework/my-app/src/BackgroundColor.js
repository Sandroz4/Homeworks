import React, { useState } from 'react';

function BgColor() {
  const [bgColor, setBgColor] = useState('red');

  return (
    <div>
      <button onClick={() => setBgColor(bgColor === 'red' ? 'blue' : 'red')}>Toggle Color</button>

      <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: bgColor,
        margin: "20px auto",
      }}></div>
    </div>
  );
}

export default BgColor;
