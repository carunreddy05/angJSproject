'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the documentsApp
 */
angular.module('documentsApp')
  .controller('myCtrl', function ($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    $scope.todos = ['Rob', 'Krish', 'Sach'];
	$scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
  });
