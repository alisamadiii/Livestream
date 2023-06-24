import { useContext } from "react";
import { CountContext } from "../context/count.context";

export default function Button() {
  const { setCount } = useContext(CountContext);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return <button onClick={handleClick}>Count</button>;
}
