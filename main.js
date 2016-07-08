Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template',

  computed: {
    remaining: function () {
      var vm = this;

      return this.list.filter(vm.inProgresse).length;
    }
  },

  methods: {
    isCompleated: function (task) {
      return task.completed;
    },

    inProgresse: function (task) {
      return ! this.isCompleated(task);
    },

    deleteTask: function (task) {
      this.list.$remove(task);
    },

    clearCompleted: function () {
      this.list = this.list.filter(this.inProgresse);
    }
  }
});

new Vue({
  el: '#app',
  data: {
    tasks: [
      { body: 'Go to the store', completed: false },
      { body: 'Go to the bank', completed: false },
      { body: 'Go to the doctor', completed: true }
    ]
  }
});