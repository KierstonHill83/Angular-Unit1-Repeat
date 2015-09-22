var app = angular.module('myApp', []);

app.controller('helloController', function($scope) {
  $scope.hello = {};
  $scope.hello.title = "World";
});

app.controller('madlibsController', function($scope) {
  $scope.boyName = "",
  $scope.adjective = "",
  $scope.pluralNoun = "",
  $scope.insect = "",
  $scope.pNoun = "",
  $scope.verb = ""
});
