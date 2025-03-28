import React, { Component } from "react";

class ErrorBoundary extends Component {
    componentDidCatch(error, info) {
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h2>something went wrong</h2>;
        }
        return this.props.children;
    }
}

const BuggyComponent = () => {
    throw new Error("This is a forced error");
};

const App = () => (
    <ErrorBoundary>
        <BuggyComponent />
    </ErrorBoundary>
);

export default App;
