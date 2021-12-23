(function () {
    var as = angular.module('app.services', ['ngRoute']);

    as.factory('AppService', ['$q', '$http', '$rootScope', '$location', 'CONSTANTS']);

    as.factory('AppService', ['$q', '$http', '$rootScope', '$location', 'CONSTANTS', function ($q, $http, $rootScope, $location, $cookieStore, CONSTANTS) {

    }]);
}());