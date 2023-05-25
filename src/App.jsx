import { useState } from "react";
import "./App.css";

function App() {
  const [justifyContent, setJustifyContent] = useState("start");

  return (
    <>
      <div className="container" style={{ justifyContent }}>
        <div></div>
        <div></div>
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
      <Circles />
    </>
  );
}

export default App;

export const Circles = () => {
  return (
    <div className="circles">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>
  );
};
