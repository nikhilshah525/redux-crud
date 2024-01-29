import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodos(input));
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={inputHandler}>
        <div className="d-flex">
          <input
            className="form-control me-2" 
            placeholder="Enter todo here"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
