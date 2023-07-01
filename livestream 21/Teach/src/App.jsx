import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <p>navbar</p>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
