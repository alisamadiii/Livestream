import React from "react";

function Count({ value }) {
  console.log("Count");
  return <div>Count: {value}</div>;
}

export default React.memo(Count);
