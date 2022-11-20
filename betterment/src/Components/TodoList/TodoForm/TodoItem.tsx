import React from "react";
import { ActionForm } from "./ActionsForm";

interface TodoItemProps {
  todo: Todo;
  onRemoveTodo: RemoveTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemoveTodo }) => {
  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const ActionOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "text-red-400",
    },
  ];

  return (
    <li
      className={
        "todo-row" + " flex flex-row justify-between text-xl mb-4 text-white"
      }
    >
      <label>{todo.text}</label>
      <ActionForm options={ActionOptions} />
    </li>
  );
};
