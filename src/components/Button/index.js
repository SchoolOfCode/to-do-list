import React from "react";

import css from "./Button.module.css";
import trash from "./trash.svg";

function Button({ onClick, children, hoverColor = "slategray", type }) {
  switch (type) {
    case "delete":
      return (
        <button
          className={`${css.button} ${css.delete}`}
          onClick={onClick}
          style={{
            "--hover-color": hoverColor,
            backgroundImage: `url(${trash})`
          }}
        ></button>
      );
    default:
      return (
        <button
          className={css.button}
          onClick={onClick}
          style={{
            "--hover-color": hoverColor
          }}
        >
          {children}
        </button>
      );
  }
}

export default Button;
