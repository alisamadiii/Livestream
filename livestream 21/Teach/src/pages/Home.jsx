import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>This is the homepage</h1>
      <Link to="/projects">
        <p>Projects</p>
      </Link>
      <a href="/projects">Project</a>
      <Link to="/about">
        <p>About</p>
      </Link>
    </>
  );
}
