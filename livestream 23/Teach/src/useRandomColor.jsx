import { useState } from "react";

export function useRandomColor() {
  const [color, setColor] = useState("rgb(255, 69, 78)");

  const changeColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  return {
    color,
    changeColor,
  };
}
