const todoList = [{ index: 0, item: 'Add a todo' }];

const todosToLS = arr => {
  localStorage.todoList = JSON.stringify(arr);
};

if (localStorage.todoList === undefined) {
  todosToLS(todoList);
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
      this.todos.pop(e.target.text);
      todosToLS(this.todos);
    }
  }
});
