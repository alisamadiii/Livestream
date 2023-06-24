import React from "react";
import { useContext } from "react";
import { ButtonContext } from "../context/Button.context";

export default function Navbar({}) {
  const { count } = useContext(ButtonContext);

  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: 24,
        marginBottom: "3em",
      }}
    >
      Navbar
      <p>{count}</p>
    </div>
  );
}
