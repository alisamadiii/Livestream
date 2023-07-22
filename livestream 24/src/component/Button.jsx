import React from "react";

function Button({ children, onClick }) {
  console.log("Button");
  return <button onClick={onClick}>{children}</button>;
}

export default React.memo(Button);
