import React from "react";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Array<Todo>;
  onRemoveTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="w-full  p-4">
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};
