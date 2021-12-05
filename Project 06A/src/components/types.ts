export type Todo = {
  text: string;
  complete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;

export interface AddTodoFormProps {
  addTodo: AddTodo;
}

export interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}
