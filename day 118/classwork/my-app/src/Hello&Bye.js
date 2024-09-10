import React from 'react';
import { useState } from 'react';

function HelloBye() {
    const [greeting, setGreeting] = useState(0);
    return (
      <div>
        <button onClick={() => setGreeting('Hello')}>display hello</button>
        <button onClick={() => setGreeting('Goodbye')}>display goodbye</button>

        <p>{greeting}</p>
      </div>
    );
  }
  
  export default HelloBye;
  