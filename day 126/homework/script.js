import React from "react";

const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

const isLoggedIn = true;

function ImageComponent() {
  const imageInfo = { src: "https://example.com/image.jpg", alt: "A beautiful scenery" };
  return <img src={imageInfo.src} alt={imageInfo.alt} />;
}

const style = { backgroundColor: "blue", color: "white", padding: "10px" };

function GreetingMessage() {
  return <p>Hello, Alice!</p>;
}

const name = "John";
const age = 30;

const tagName = "h1";

const categories = [
  { name: "Fruit", items: ["Apple", "Banana", "Cherry"] },
  { name: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
];

const users = [
  { name: "Zuka", age: 30 },
  { name: "Jumberi", age: 25 },
  { name: "Ivane", age: 28 },
];

function App() {
  return (
    <div>
      {isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}

      <ul>{fruitList}</ul>

      <ImageComponent />

      <div style={style}>This is a styled div</div>

      <GreetingMessage />

      <p>{`${name} is ${age} years old.`}</p>

      {React.createElement(tagName, {}, "This is dynamic!")}

      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h2>{category.name}</h2>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
