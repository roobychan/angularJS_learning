(function () {
  'use strict';

  angular
    .module('todoApp')
    .service('taskServ', [function() {
      this.taskList =[
        {name:'task1', isDone:false, isArchived:false},
        {name:'task2', isDone:false, isArchived:false}
      ];
  }]);
})(window.angular);