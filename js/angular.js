var app = angular.module('myApp', []);

app.controller('helloController', function($scope) {
  $scope.hello = {};
  $scope.hello.title = "World";
});

app.controller('madlibsController', function($scope) {
	$scope.madlibs = {
	  'boyName': "",
	  'adjective': "",
	  'pluralNoun': "",
	  'insect': "",
	  'pNoun': "",
	  'verb': ""
	};
});
