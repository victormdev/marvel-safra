(function () {
    var as = angular.module('app.controllers', ['ngRoute']);

    as.controller('HeroShowCtrl', ['$scope', '$rootScope', '$http', '$location', 'HeroService', function ($scope, $rootScope, $http, $location, HeroService) {

        $scope.heroList = [];

        $scope.load = function () {

            Heroervice.getHeroes()
            .success(function (result, status, headers, config) {
                $scope.heroList = result;
            });
        }

    }]);

}());