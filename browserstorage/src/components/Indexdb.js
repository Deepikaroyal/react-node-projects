import React from "react";
import Dexie from "dexie";
import { useState } from "react";
export default function Indexdb() {
  const db = new Dexie("userList");
  db.version(1).stores({ items: "++id,name,email" });

  const [allItems, setAllItems] = useState([]);

  const addItemToDb = async (event) => {
    event.preventDefault();
    const name = document.querySelector(".item-name").value;
    const email = document.querySelector(".item-email").value;
    db.items.add({ name, email: email });
    const newItemList = await db.items.toArray();
    setAllItems(newItemList);
  };

  const removeItemFromDb = async (id) => {
    db.items.delete(id);
    const newItemList = await db.items.toArray();
    setAllItems(newItemList);
  };

  const itemData = allItems.map((item) => (
    <div className="row" key={item.id}>
      <p className="col s5">
        <span className="black-text">{item.name}</span>
      </p>
      <p className="col s5">{item.email}</p>
      <button
        onClick={() => removeItemFromDb(item.id)}
        className="delete-button"
      >
        delete
      </button>
    </div>
  ));

  return (
    <div className="App">
      <h3>Indexdb</h3>
      <form onSubmit={(event) => addItemToDb(event)}>
        <input
          type="text"
          className="item-name"
          placeholder="enter your name"
        />
        <br />
        <input
          type="text"
          className="item-email"
          placeholder="enter your mail"
        />
        <br />
        <button type="submit">Add data</button>
      </form>
      {allItems.length > 0 && (
        <div className="card">
          <div className="card-content">
            <form action="#">{itemData}</form>
          </div>
        </div>
      )}
    </div>
  );
}
