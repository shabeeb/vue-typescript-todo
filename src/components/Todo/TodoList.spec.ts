import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from './TodoList.vue';
import Vuex from 'vuex';
import TodoModule from '../../store/modules/Todo/';
const localVue = createLocalVue();

localVue.use(Vuex);

describe('TodoList.vue', () => {
  it('renders props when passed', () => {
    expect(3).toBe(3);
    const store = new Vuex.Store({
      modules: {
        TodoModule
      }
    });
    jest.mock('axios', () => ({
      axios: jest.fn()
    }));
    const todos = [{}];
    const wrapper = shallowMount(TodoList, {
      store,
      localVue,
      propsData: { todos }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  // it('should call setNewTodo on change of todo-input', () => {
  //   expect(3).toBe(3);
  //   const store = new Vuex.Store({
  //     modules: {
  //       TodoModule
  //     }
  //   });
  //   jest.mock('axios', () => ({
  //     axios: jest.fn()
  //   }));
  //   // const setNewTodo = jest.fn();
  //   const todos = [{}];
  //   const wrapper = mount(TodoList, {
  //     store,
  //     localVue,
  //     propsData: { todos }
  //     // methods: { setNewTodo }
  //   });

  //   wrapper.find('input').trigger('change');
  //   wrapper.find('button').trigger('click');
  //   expect(wrapper.element).toMatchSnapshot();
  //   // expect(setNewTodo).toHaveBeenCalled();
  // });
});
