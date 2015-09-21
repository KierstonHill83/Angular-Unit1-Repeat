var app = angular.module('myApp', []);

app.controller('helloController', function($scope) {
  $scope.hello = {};
  $scope.hello.title = "World";
});
