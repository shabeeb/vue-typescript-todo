import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from './TodoList.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TodoList.vue', () => {
  it('renders props when passed', () => {
    // const store = new Vuex.Store({
    //   modules: {
    //     TodoModule,
    //   },
    // });

    const store = new Vuex.Store({
      modules: {
        ContactModule: {
          state: { todosList: [] },
          getters: {
            removeTodo: jest.fn(),
          },
        },
      },
    });

    jest.mock('axios', () => ({
      axios: jest.fn(),
    }));
    const todosList = [
      {
        name: 'test',
        description: 'gsd',
        id: '4751979',
        completed: false,
      },
    ];
    const wrapper = shallowMount(TodoList, {
      store,
      localVue,
      propsData: { todosList },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
