import "./App.css";
import { useState } from "react";

function App() {
  const [justifyContent, setJustifyContent] = useState("start");

  return (
    <div>
      <div className="container" style={{ justifyContent }}>
        <div />
        <div />
        <div />
        <div></div>
        <div></div>
      </div>
      <div className="buttons">
        <button onClick={() => setJustifyContent("start")}>start</button>
        <button onClick={() => setJustifyContent("end")}>end</button>
        <button onClick={() => setJustifyContent("center")}>center</button>
        <button onClick={() => setJustifyContent("space-between")}>
          space-between
        </button>
        <button onClick={() => setJustifyContent("space-around")}>
          space-around
        </button>
        <button onClick={() => setJustifyContent("space-evenly")}>
          space-evenly
        </button>
      </div>
    </div>
  );
}

export default App;
