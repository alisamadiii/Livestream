import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes className="App">
      <Route path="/" Component={Home} />
      <Route path="/project" Component={Project} />
      <Route path="/about" Component={About} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default App;
