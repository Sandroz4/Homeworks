import React from 'react';
import { useState } from 'react';

function Visible() {
  const [count, setCount] = useState('visible');
  return (
    <div>
      <button onClick={() => setCount('visible')}>show</button>
      <button onClick={() => setCount(' ')}>hide</button>
      <p>{count}</p>
    </div>
  );
}

export default Visible;
