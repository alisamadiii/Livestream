import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [opacity, setOpacity] = useState(0);

//   const handleCountAndOpacity = (event) => {
//     if (event.target.value === "increment") {
//       setCount(count + 1);
//       setOpacity(opacity + 1);
//     } else if (event.target.value === "decrement") {
//       if (count < 1 && opacity < 1) {
//         setCount(0);
//         setOpacity(0);
//       }
//       setCount(count - 1);
//       setOpacity(opacity - 1);
//     }
//   };

//   // useEffect(() => {

//   // }, [count, opacity]);

//   return (
//     <div
//       className="App"
//       style={{ background: `rgba(255, 0, 0, ${opacity / 100})` }}
//     >
//       <h1>useReducer() & useEffect()</h1>
//       <h2>{count}</h2>
//       <button
//         value="decrement"
//         onClick={(event) => handleCountAndOpacity(event)}
//       >
//         Decrement
//       </button>
//       <button
//         value="increment"
//         onClick={(event) => handleCountAndOpacity(event)}
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(count / 100);
  }, [count]);

  return (
    <div className="App" style={{ background: `rgba(255, 0, 0, ${opacity})` }}>
      <h1>useReducer() & useEffect()</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
