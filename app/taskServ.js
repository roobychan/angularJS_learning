(function () {
  'use strict';

  angular
    .module('todoApp')
    .service('taskServ', [function() {
      this.taskList = [];
      this.archivedList = [];
  }]);
})(window.angular);