import React from "react";

const names = ["Sandro", "Sandro", "Sandro"];

export default function App() {
  return (
    <main>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </main>
  );
}

