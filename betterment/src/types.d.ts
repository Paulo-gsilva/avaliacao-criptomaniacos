type AddTodo = (newTodo: string) => void;

type RemoveTodo = (todoToRemove: Todo) => void;

type EditTodo = (todoToEdit: Todo) => void;

type Todo = {
  text: string;
  completed: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
};
