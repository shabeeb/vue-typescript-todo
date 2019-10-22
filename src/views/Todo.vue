
<template>
  <div class="todo">
    <Todo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo from '@/components/Todo/Todo.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';

@Component({
  components: {
    Todo
  },
  computed: {
    ...mapGetters({
      newTodo: 'TodoModule/newTodo',
      todos: 'TodoModule/todos',
      newTodoMemo: 'TodoModule/newTodoMemo'
    })
  }
})
export default class Home extends Vue {}
</script>
