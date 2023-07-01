import React from "react";
import { Link } from "react-router-dom";

export default function Home({}) {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <Link to="/project">project</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}
