import React, { createContext, useContext } from "react";

const firstContext = createContext();
const secondContext = createContext();

const FirstProvider = ({ children }) => (
    <firstContext.Provider value="value from first provider">
        {children}
    </firstContext.Provider>
);

const SecondProvider = ({ children }) => (
    <secondContext.Provider value="value from second provider">
        {children}
    </secondContext.Provider>
)


const App = () => (
    <FirstProvider>
        <SecondProvider>
            <Child />
        </SecondProvider>
    </FirstProvider>
);

export default App
