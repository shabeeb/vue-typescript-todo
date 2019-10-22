import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ToDoState } from './types';
import { RootState } from '../../types';

/**
 * ToDo state
 */
export const state: ToDoState = {
  todos: [],
  loading: false,
  newTodo: '',
  newTodoMemo: '',
};

const namespaced: boolean = true;

const TodoModule: Module<ToDoState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default TodoModule;
