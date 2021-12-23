(function() {
    // declare global angular variable
    var as = angular.module('app', [
        'http-auth-interceptor',
        'ngRoute',
        'ngCookies',
        'app.filters',
        'app.services',
        'app.directives',
        'app.controllers',
        'localytics.directives',
        'nvd3'
    ]);

    // constant definitions
    as.constant('CONSTANTS', (function () {
              
        return {
            API_URL: 'http://gateway.marvel.com',    // api location
            PAGE_REFRESH_TIME: 5000         // milliseconds
        }
        
    })());

    // route definitions
    as.config(function($routeProvider, $httpProvider) {
        
        $routeProvider
            .when('/', { templateUrl: '' })
            .when('/find', { templateUrl: '' })

            .otherwise({ redirectTo: '/' });
    });

}());