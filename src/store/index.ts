import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import TodoModule from './modules/Todo/';

Vue.use(Vuex);

/**
 * Main store with modules
 */
const store: StoreOptions<RootState> = {
  modules: {
    TodoModule,
  },
  strict: true,
};

export default new Vuex.Store<RootState>(store);
