import { useState } from "react";

export function useRandomColor() {
  const [color, setColor] = useState("rgb(255, 24, 40)");

  const changingColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return { color, changingColors };
}
