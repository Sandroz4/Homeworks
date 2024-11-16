function MyComponent() {
    return (
      <div>
        <h1>Welcome to React</h1>
        
        <button onClick={() => alert("Clicked 1st!")}>Button 1</button>
        <button onClick={() => alert("Clicked!")}>Button 2</button>
      </div>
    );
  }
  
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
  