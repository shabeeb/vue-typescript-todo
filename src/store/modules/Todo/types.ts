export interface ToDoState {
  todos: ToDoModel[];
  loading?: boolean;
  newTodo?: string;
  newTodoMemo?: string;
}

export interface ToDoModel {
  name: string;
  completed?: boolean;
  id: string;
  description: string;
}
