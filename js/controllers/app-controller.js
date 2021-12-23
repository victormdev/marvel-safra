(function() {
    var as = angular.module('app.controllers', ['ngRoute','ui.bootstrap','ngResource']);
    
    as.controller('AppCtrl', 
        ['$scope', '$rootScope', '$http', '$location', 'AppService', 'HeroService', 'ngResource', 'CONSTANTS',
            function ($scope, $rootScope, $http, $location, AppService, HeroService, resource ,  CONSTANTS) {

        
    }]);

}());