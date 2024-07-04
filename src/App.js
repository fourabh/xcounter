import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((count) => count + 1);
  };
  const handleSubtract = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleSubtract}>Decrement</button>
    </div>
  );
}

export default App;
