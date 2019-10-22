import { GetterTree } from 'vuex';
import { ToDoState } from './types';
import { RootState } from '../../types';

/**
 * Getters
 */
export const getters: GetterTree<ToDoState, RootState> = {
  /**
   * New todo
   * @param {*} state
   * @returns  {string} new to do
   */

  newTodo(state) {
    return state.newTodo;
  },

  /**
   * todos list
   * @param {*} state
   * @returns {object} todos
   */
  todoList(state) {
    return state.todos;
  },
  /**
   * newTodoMemo
   * @param {*} state
   * @returns {string} state
   */
  newTodoMemo(state) {
    return state.newTodoMemo;
  },
};
