import React, { useState } from "react";
import fullCart from "./full-kart.svg";
import css from "./ListItem.module.css";

function ListItem({ name, completed, toggleCompleted }) {
  return (
    <li
      className={css.listItem}
      onClick={toggleCompleted}
      style={
        completed
          ? { textDecoration: `line-through`, "--image": `url(${fullCart})` }
          : {}
      }
    >
      {name}
    </li>
  );
}

export default ListItem;
