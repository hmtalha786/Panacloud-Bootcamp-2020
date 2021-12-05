import React from "react";
import { TodoListProps } from "./types";

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.text}>
          <label className={todo.complete ? "complete" : undefined}>
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo)}
              checked={todo.complete}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </div>
  );
};
