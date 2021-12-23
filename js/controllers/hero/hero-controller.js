(function () {
  var as = angular.module('HeroMarvel', ['ngRoute']);

  as.controller('HeroCtrl', function ($scope, $location, $http) {
    $scope.teste = "testeee";

  });
}());