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

    // route definitions
    as.config(function($routeProvider, $httpProvider) {
        
        $routeProvider
            .when('/', { templateUrl: '' })
            .when('/find', { templateUrl: '' })

            .otherwise({ redirectTo: '/' });
    });

}());