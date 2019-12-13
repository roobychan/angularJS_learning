angular.module('todoApp').directive('task', [function(){
  return{
    templateUrl: 'task.html',
    scope: {
      item: '=',
      itemIndex: '@',
      delete: '&onDelete',
      archive: '&onArchive'
    },
  };
}]);