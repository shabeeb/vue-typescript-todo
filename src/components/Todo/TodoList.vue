  
/**
 * component to list all todo's
 * 
 */
  <template>
  <section class="main" v-show="todosList.length" v-cloak>
    <!-- v-show="todosList.length" -->
    <ul class="todo-list">
      <li
        v-for="todo in todosList"
        class="todo"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            v-model="todo.completed"
            @change="toggleCompleted(todo.id)"
          />
          <label>
            {{ todo.name }}
            <span>{{todo.description != '' ? `- ${todo.description}` : ''}}</span>
          </label>
          <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ToDoModel } from '../../store/modules/Todo/types';
import { Getter, namespace, Action } from 'vuex-class';
const TodoModule = namespace('TodoModule');

@Component
export default class TodoList extends Vue {
  // props todo list
  @Prop() public todosList!: ToDoModel[];
  @TodoModule.Action('toggleCompleted') toggleCompletedAction!: any;
  @TodoModule.Action('removeTodo') removeTodoAction!: any;
  /**
   * toggle to completed  or non-complete
   * @param {string} id - todo id
   * @returns {} - dispatch store action
   */
  private toggleCompleted(id: any) {
    const selectedValue = this.todosList.find(todo => todo.id === id);
    this.toggleCompletedAction(selectedValue);
  }
  /**
   * remove to do
   * @param {string} todo - todo id
   */
  private removeTodo(todo: any) {
    this.removeTodoAction(todo);
  }
}
</script>