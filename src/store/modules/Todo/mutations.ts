import { MutationTree } from 'vuex';
import { ToDoState, ToDoModel } from './types';

/**
 * mutation
 */
export const mutations: MutationTree<ToDoState> = {
  /**
   * Sets loading
   * @param {*} state
   * @param {boolean} flag - loading
   */

  SET_LOADING(state, flag: boolean) {
    state.loading = flag;
  },
  /**
   * Sets todos
   * @param {*} state
   * @param todos todo list
   */

  // TODO - change to type
  SET_TODOS(state, todos: any) {
    state.todos = todos;
  },
  /**
   * Sets new todo
   * @param {*} state
   * @param {string} todo
   */
  SET_NEW_TODO(state, todo: string) {
    state.newTodo = todo;
  },
  /**
   * Sets new todo memo
   * @param {*} state
   * @param {string} todo
   */
  SET_NEW_TODO_MEMO(state, todo: string) {
    state.newTodoMemo = todo;
  },
  /**
   * Adds todo
   * @param {*} state
   * @param {object} todoObject
   */
  ADD_TODO(state, todoObject: ToDoModel) {
    state.todos.push(todoObject);
  },
  /**
   * Removes todo
   * @param {*} state
   * @param {ToDoModel} todo
   */
  REMOVE_TODO(state, todo: ToDoModel) {
    const todos = state.todos;

    todos.splice(todos.indexOf(todo), 1);
  },
  /**
   * Clears new todo and todo memo
   * @param {*} state
   */
  CLEAR_NEW_TODO(state) {
    state.newTodo = '';
    state.newTodoMemo = '';
  },
  /**
   * Toggles todo - update status
   * @param {*} state
   * @param {ToDoModel} todo
   */
  TOGGLE_TODO(state, todo: ToDoModel) {
    const todos = state.todos;
    todos.splice(todos.indexOf(todo), 1, todo);
  }
};
