import React from "react";

import ListItem from "../ListItem";
import css from "./List.module.css";
// list component (List)
// takes in list as prop
// maps over each item and makes an li
function List({ list, toggleCompleted }) {
  return (
    <ul className={css.list}>
      {list.map((item, i) => (
        <ListItem
          name={item.name}
          completed={item.completed}
          toggleCompleted={() => toggleCompleted(i)}
          key={`${item}${i}`}
        />
      ))}
    </ul>
  );
}
export default List;
