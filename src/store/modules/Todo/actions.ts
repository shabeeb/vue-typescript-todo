import { ActionTree } from 'vuex';
import { ToDoState, ToDoModel } from './types';
import { RootState } from '../../types';
import axios from '@/lib/axios';

const BASE_URL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/';

/**
 * creating random id
 * @returns number
 */
function randomId() {
  return Math.random()
    .toString()
    .substr(2, 7);
}

/**
 * Todo Actions
 *
 */
export const actions: ActionTree<ToDoState, RootState> = {
  /**
   * load todo from server and set to store
   * @param {*} { commit }
   */
  loadTodos({ commit }) {
    commit('SET_LOADING', true);
    axios
      .get(`${BASE_URL}todo`)
      .then(r => r.data)
      .then(todos => {
        commit('SET_TODOS', todos);
        commit('SET_LOADING', false);
      })
      .catch(() => {
        commit('SET_TODOS', []);
        commit('SET_LOADING', false);
      });
  },

  /**
   * setting todolist to
   *
   * @param {*} { commit }
   * @param {ToDoModel} todo
   */

  setNewTodo({ commit }, todo: ToDoModel) {
    commit('SET_NEW_TODO', todo);
  },

  /**
   * add a new to to object and post to server
   *
   * @param {*} { commit, state }
   * @returns
   */

  addTodo({ commit, state }) {
    if (!state.newTodo) {
      // do not add empty todos
      return;
    }
    const todo = {
      name: state.newTodo,
      description: state.newTodoMemo,
      id: randomId(),
      completed: false,
    };
    axios.post(`${BASE_URL}todo`, todo).then(_ => {
      commit('ADD_TODO', _.data);
    });
  },

  /**
   * Removes todo from object and requst to server
   * @param {*} { commit }
   * @param {ToDoModel} todo
   */
  removeTodo({ commit }, todo: ToDoModel) {
    axios.delete(`${BASE_URL}todo/${todo.id}`).then(_ => {
      commit('REMOVE_TODO', todo);
    });
  },
  /**
   * Clears new todo
   * @param { commit }
   */
  clearNewTodo({ commit }) {
    commit('CLEAR_NEW_TODO');
  },
  /**
   * Toggles completed todos
   * @param context
   * @param {ToDoModel} todo - single to do
   */
  toggleCompleted(context, todo: ToDoModel) {
    axios.put(`${BASE_URL}todo/${todo.id}`, todo).then(_ => {
      context.commit('TOGGLE_TODO', todo);
    });
  },

  /**
   * setting new memo to store
   * @param {*} context
   * @param {string} memo
   */
  setNewTodoMemo(context, memo: string) {
    context.commit('SET_NEW_TODO_MEMO', memo);
  },
};
