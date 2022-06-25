import React, { useState } from "react";

function Button({ title, className }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={className ? "btn " + className : "btn"}
    >
      {title}
    </button>
  );
}

export default Button;
