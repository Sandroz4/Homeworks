import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <button onClick={() => setCount(count + 2)}>+ 2</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
