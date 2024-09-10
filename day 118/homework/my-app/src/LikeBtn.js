import React from 'react';
import { useState } from 'react';

function Like() {
  const [count, setCount] = useState('visible');
  return (
    <div>
      <div>
        <button onClick={() => setGreeting('Like')}>display like</button>
        <button onClick={() => setGreeting('Unlike')}>display Unlike</button>

        <p>{greeting}</p>
      </div>
    </div>
  );
}

export default Like;
