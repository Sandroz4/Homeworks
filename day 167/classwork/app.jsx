import React, { createContext, useContext, useState } from "react";

const countContext = createContext();

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <countContext.Provider value={{ count, setCount }}>
            {children}
        </countContext.Provider>
    );
};

const Counter = () => {
    const { count, setCount } = useContext(countContext);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};

const App = () => (
    <CountProvider>
        <Counter />
    </CountProvider>
);

export default App;
