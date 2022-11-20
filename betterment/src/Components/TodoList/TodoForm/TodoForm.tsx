import React, { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form mb-12">
      <input
        type="text"
        value={newTodo}
        className="todo-input shadow-lg border-black p-2 rounded-lg w-[10rem] lg:w-auto"
        placeholder="Adicione uma tarefa"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="todo-button rounded-lg border-none bg-white ml-8 p-2"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </form>
  );
};
