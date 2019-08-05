import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      items:[
      {task: 'Create todo List', priority: 'true'},
      {task: 'Fix todo list', priority: 'true'},
      {task: 'Break laptop', priority: 'true'}
    ],
    newTask: '',
    newPriority: ''
  },
  methods: {
    saveNewTask: function(e) {
      e.preventDefault();
      this.items.push({
        task: this.newTask,
        priority: this.newPriority
      });
      this.newTask = '',
      this.newPriority = ''
    },
    deleteTask: function(index){
      this.items.splice(index, 1)
    }
  }

});
});
