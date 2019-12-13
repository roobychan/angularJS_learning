(function(angular){
  'use strict';
  angular.module('todoApp',['ngRoute'])
    .controller('TodoCtr', ['$scope', 'taskServ', function($scope,taskServ){
      $scope.taskList = taskServ.taskList;
      $scope.name = '';

      $scope.delete = function (index) {
        $scope.taskList.splice(index, 1);
      };
      $scope.add = function(name){
        $scope.taskList.push({name: name, isDone: false, isArchived: false});
        $scope.name = '';
      };
      $scope.archive = function (index) {
        $scope.taskList[index].isArchived = true;
      };
  
    }])
    .controller('ArchivedCtr', ['$scope', 'taskServ', function($scope,taskServ){
      $scope.taskList = taskServ.taskList;

      $scope.delete = function (index) {
        $scope.taskList.splice(index, 1);
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