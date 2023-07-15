import { useRandomColor } from "./useRandomColor";

function App() {
  const { color, changingColors } = useRandomColor();

  return (
    <div className="App" style={{ background: color }}>
      <button onClick={changingColors}>Change Color</button>
    </div>
  );
}

export default App;
