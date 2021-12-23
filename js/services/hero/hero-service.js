(function () {
    var as = angular.module('app.services', ['ngRoute']);

    as.factory('HeroService', ['$q', '$http', '$location', 'CONSTANTS']);

    as.factory('HeroService', ['$q', '$http', '$location', 'CONSTANTS', function ($q, $http, $location, CONSTANTS) {

        // publicKey
        HeroServiceOp.getHeroes = function (name) {
            
            return $http.get(CONSTANTS.API_URL + '/v1/public/characters', {
                params: {
                    nameStartsWith: name,
                    publicKey: '5234a931fdd1da574fb6133e31a6d02c'
                }
            })
        };

    }]);
}());