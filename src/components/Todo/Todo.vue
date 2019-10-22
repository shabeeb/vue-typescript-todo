/**
 * components to add new do
 * 
 */

<template>
  <div class="d-flex justify-content-center">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          :value="newTodo"
          @change="setNewTodo"
          @keyup.enter="addTodo"
          name="todo-input"
        />
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="Any Memo ?"
          :value="newTodoMemo"
          @change="setNewTodoMemo"
          @keyup.enter="addTodo"
          name="todo-memo"
        />
      </header>

      <TodoList :todosList="todosList"></TodoList>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ToDoModel } from '../../store/modules/Todo/types';
import TodoList from './TodoList.vue';
import { Getter, namespace, Action } from 'vuex-class';
const TodoModule = namespace('TodoModule');

/**
 * components used
 */
@Component({
  components: {
    TodoList
  }
})
export default class Todo extends Vue {
  @TodoModule.Getter('todoList') public todosList!: [];
  @TodoModule.Getter('newTodo') public newTodo!: string;
  @TodoModule.Getter('newTodoMemo') public newTodoMemo!: string;
  @TodoModule.Action('setNewTodoMemo') setNewTodoMemoAction!: any;
  @TodoModule.Action('loadTodos') loadTodos!: any;
  @TodoModule.Action('setNewTodo') setNewTodoAction!: any;
  @TodoModule.Action('clearNewTodo') clearNewTodoAction!: any;
  @TodoModule.Action('addTodo') addTodoAction!: any;

  /**
   * setting new to do
   * @param {object} event - event.
   * @returns {} dispatch to set new todo value  in store
   */
  setNewTodo(event: any) {
    // this.$store.dispatch('TodoModule/setNewTodo', event.target.value);
    this.setNewTodoAction(event.target.value);
  }
  /**
   * set new todos and memo
   * @param {object} event - event.
   * @returns {} dispatch to store to set new todo
   */
  addTodo(event: any) {
    event.target.value = '';

    this.addTodoAction();
    this.clearNewTodoAction();
  }

  /**
   * setting new to do memo
   * @param {object} event - event.
   * @returns {} dispatch to set new todo memo value  in store
   */
  setNewTodoMemo(event: any) {
    this.setNewTodoMemoAction(event.target.value);
    // this.$store.dispatch('TodoModule/setNewTodoMemo', event.target.value);
  }
  /**
   * Getting list of available to do
   */

  private created() {
    this.loadTodos();
  }
}
</script>

<style lang="scss" >
@import './styles.scss';
</style>

