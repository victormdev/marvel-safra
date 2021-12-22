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

}());