import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./addTodo";
import { removeTodos, updateTodos } from "./todoSlice";
import Form from "react-bootstrap/Form";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeTodos(id));
  };

  const statusHandler = (todo) => {
    dispatch(updateTodos(todo));
  };

  return (
    <div>
      <h1 className="text-center">Todos List</h1>
      <AddTodo />
      <div className="table-responsive mt-3">
        <table className="table mb-0 table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={todo.id}>
                  <td draggable={true}>{index + 1}</td>
                  <td>{todo.text}</td>
                  <td>
                    <Form.Check
                      type={"checkbox"}
                      checked={todo.status}
                      onChange={() => statusHandler(todo)}
                      label={todo.status ? "Completed" : "Pending"}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      type="button"
                      onClick={() => removeHandler(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
