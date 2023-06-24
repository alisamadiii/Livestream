import { useContext } from "react";
import { CountContext } from "../context/count.context";

export default function Count() {
  const { count } = useContext(CountContext);

  return <p>{count}</p>;
}
