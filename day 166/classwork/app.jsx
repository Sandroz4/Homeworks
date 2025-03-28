import React, { createContext, useContext } from "react";

const authContext = createContext();

const AuthProvider = ({ children, value }) => (
    <authContext.Provider value={value}>{children}</authContext.Provider>
);

const AuthConsumer = () => {
    const auth = useContext(authContext);
    return (
        <div>
            <p>email: {auth.email}</p>
            <p>password: {auth.password}</p>
        </div>
    );
};

const App = () => (
    <>
        <AuthProvider value={{ email: "user1@example.com", password: "password123" }}>
            <AuthConsumer />
        </AuthProvider>

        <AuthProvider value={{ email: "user2@example.com", password: "secure456" }}>
            <AuthConsumer />
        </AuthProvider>

        <AuthProvider value={{ email: "user3@example.com", password: "mypassword789" }}>
            <AuthConsumer />
        </AuthProvider>
    </>
);

export default App;
