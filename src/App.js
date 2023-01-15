import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([...items, Math.random()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;