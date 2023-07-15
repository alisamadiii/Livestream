import { useRandomColor } from "./useRandomColor";

function App() {
  const { color, changeColor } = useRandomColor();

  return (
    <div className="App" style={{ background: color }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
