import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
      opacity: state.count / 100,
    };
  } else if (action.type === "decrement") {
    if (state.count === 0) {
      return {
        count: 0,
        opacity: 0,
      };
    }

    return {
      count: state.count - 1,
      opacity: state.count / 100,
    };
  } else {
    return;
  }
}

function Reducer() {
  // useReducer(reducerFn, initialState)
  const [state, dispatch] = useReducer(reducer, { count: 0, opacity: 0 });

  const { count, opacity } = state;

  return (
    <div className="App" style={{ background: `rgba(255, 0, 0, ${opacity})` }}>
      <h1>useReducer() & useEffect()</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default App;
