import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
      opacity: state.count / 10,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - 1,
      opacity: state.count / 10,
    };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, opacity: 0 });

  return (
    <div
      className="App"
      style={{ background: `rgba(255, 0, 0, ${state.opacity})` }}
    >
      <h1>useReducer()</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default App;
