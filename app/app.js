(function(angular){
  'use strict';
  angular.module('todoApp',['ngRoute'])
    .controller('TodoCtr', ['$scope', 'taskServ', function($scope,taskServ){
      $scope.taskList = taskServ.taskList;
      $scope.archivedList = taskServ.archivedList;
      $scope.name = '';

      $scope.delete = function (index) {
        $scope.taskList.splice(index, 1);
      };
      $scope.add = function(name){
        $scope.taskList.push({name: name, isDone: false, isArchived: false});
        $scope.name = '';
      };
      $scope.archive = function (index) {
        var archiveTask = $scope.taskList.splice(index, 1)[0];
        archiveTask.isArchived = true;
        $scope.archivedList.push(archiveTask);
      };
  
    }])
    .controller('ArchivedCtr', ['$scope', 'taskServ', function($scope,taskServ){
      $scope.taskList = taskServ.taskList;
      $scope.archivedList = taskServ.archivedList;

      $scope.delete = function (index) {
        $scope.archivedList.splice(index, 1);
      };
    // $scope.archive = function (index) {
      //   $scope.taskList[index].isArchived = true;
      // };
    }])


    .config(function ($routeProvider) {
      $routeProvider.when('/',{
        templateUrl: 'todo.html',
        controller: 'TodoCtr'
      })
      .when('/archived',{
        templateUrl: 'archived.html',
        controller: 'ArchivedCtr'
      });
    });
})(window.angular);