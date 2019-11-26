const todosToLS = arr => {
  localStorage.todoList = JSON.stringify(arr);
};

if (localStorage.todoList === undefined) {
  todosToLS([]);
}

const app = new Vue({
  el: '#app',
  data: {
    todos: JSON.parse(localStorage.todoList)
  },
  methods: {
    addTodo: function(e) {
      this.todos.push({
        index: this.todos.length,
        text: e.target.todo.value
      });
      todosToLS(this.todos);
      e.target.todo.value = '';
    },
    deleteTodo: function(e) {
      this.todos.pop(e.target.id);
      todosToLS(this.todos);
    }
  }
});
