// import React, { useState, useMemo } from "react";


// const Child = React.memo(({ text }) => {
//   console.log("Child component rendered");
//   return <h2>{text}</h2>;
// });

// function App() {
//   const [count, setCount] = useState(1);
//   const [text, setText] = useState("Hello!");


//   const factorial = useMemo(() => {
//     console.log("Calculating factorial...");
//     const calcFactorial = (n) => (n <= 1 ? 1 : n * calcFactorial(n - 1));
//     return calcFactorial(count);
//   }, [count]);

//   return (
//     <div>
//       <Child text={text} />
//       <p>Count: {count}</p>
//       <p>Factorial: {factorial}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setText("Hello!")}>Set same text</button>
//     </div>
//   );
// }

// export default App;
