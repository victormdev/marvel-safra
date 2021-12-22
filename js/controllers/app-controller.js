(function() {
    var as = angular.module('app.controllers', ['angularUtils.directives.dirPagination', 'angular-confirm', 'ui.bootstrap.tpls', 'ui.utils.masks', 'ngFileUpload', 'ng-ip-address']);
    
    as.controller('AppCtrl', 
        ['$scope', '$rootScope', '$http', '$location', '$interval', '$timeout', '$cookieStore', 'AppService', 'HeroService', 'CONSTANTS',
            function ($scope, $rootScope, $http, $location, $interval, $timeout, $cookieStore, AppService, HeroService, CONSTANTS) {

        
    }]);

}());