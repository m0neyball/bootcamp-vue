Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template',

  computed: {
    remaining: function () {
      var vm = this;

      return this.list.filter(function (task) {
        return ! vm.isInProgresse(task);
      }).length;
    }
  },

  methods: {
    isCompleated: function (task) {
      return task.completed;
    },
    isInProgresse: function (task) {
      return ! this.isCompleated(task);
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