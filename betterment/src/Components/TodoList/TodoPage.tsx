import * as React from "react";
import NavBar from "../NavBar/NavBar";
import { TodoForm } from "./TodoForm/TodoForm";
import { TodoList } from "./TodoForm/TodoList";

function TodoPage() {
  const [todos, setTodos] = React.useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text !== todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <section className="hidden w-full h-screen bg-amber-100">
        <NavBar />
        <div className="w-4/5 lg:w-1/2 min-h-[50%] mt-12 p-12 mx-auto flex flex-col justify-start items-center bg-blue-900 rounded-lg">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} onRemoveTodo={removeTodo} />
        </div>
      </section>
    </>
  );
}

export default TodoPage;
