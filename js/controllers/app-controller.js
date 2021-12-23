(function () {
    var as = angular.module('app.controllers', ['ngRoute', 'ngResource']);

    as.controller('MainCtrl',
        ['$scope', '$rootScope', '$http', '$location', 'AppService', 'HeroService', 'ngResource', 'CONSTANTS',
            function ($scope, $rootScope, $http, $location, AppService, HeroService, resource, CONSTANTS) {


            }]);

}());