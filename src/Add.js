import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./actions";
import ShowData from "./ShowData";
import "./App.css";
export default function Add() {
  const dispatch = useDispatch();
  const [note, setNewNote] = useState();

  const add = () => {
    dispatch(addTodos({ name: note, time: +new Date() }));
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        value={note}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={add}>Add new</button>
      <ShowData />
    </div>
  );
}
