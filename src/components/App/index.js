import React, { useState } from "react";
import "./App.css";

import List from "../List";
import Input from "../Input";
import Button from "../Button";

function App() {
  const [list, setList] = useState([]);

  function addToList(newItem) {
    setList([...list, { name: newItem, completed: false }]);
  }

  function toggleCompleted(i) {
    const newList = [
      ...list.slice(0, i),
      {
        ...list[i],
        completed: !list[i].completed
      },
      ...list.slice(i + 1)
    ];

    setList(newList);
  }

  function clearList() {
    setList([]);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Shopping List</h1>
        <Input addToList={addToList}></Input>
        <List list={list} toggleCompleted={toggleCompleted}></List>
        <Button onClick={clearList} type="delete" hoverColor="red"></Button>
      </div>
    </div>
  );
}

export default App;
