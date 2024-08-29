import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState('i am visible now');

  return (
    <div>
        <p>
          {count}
        </p>
        <button onClick={() => setCount('i am visible now')}>show</button>
        <button onClick={() => setCount('')}>hide</button>

    </div>
  )
  // return (
  //   <div>
  //       <p>
  //         Count: {count}
  //       </p>
  //       <button onClick={() => setCount(count + 1)}>increment</button>
  //       <button onClick={() => setCount(count - 1)}>decrement</button>
  //   </div>
  // )
}

export default App;
