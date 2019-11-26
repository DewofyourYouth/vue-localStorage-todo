let ls = localStorage.todoList;

const todoList = [
  { index: 0, text: 'drink coffee' },
  { index: 1, text: 'write code' }
];

const todosToLS = arr => {
  localStorage.todoList = JSON.stringify(arr);
  let ls = localStorage.todoList;
};

if (ls == undefined) {
  todosToLS(todoList);
}

const app = new Vue({
  el: '#app',
  data: {
    todos: JSON.parse(ls)
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
