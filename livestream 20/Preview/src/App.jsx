import { useContext } from "react";
import { ButtonContext } from "./context/Button.context";

function App() {
  const { count, setCount } = useContext(ButtonContext);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
