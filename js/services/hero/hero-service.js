(function () {
    var as = angular.module('app.services');

    as.factory('HeroService', ['$q', '$http', '$location', 'CONSTANTS']);

    as.factory('HeroService', ['$q', '$http', '$location', 'CONSTANTS', function ($q, $http, $location, CONSTANTS) {

        // publicKey
        HeroServiceOp.getHeroes = function (radioId, page, mrpp) {
            return $http.get(CONSTANTS.API_URL + '/e1Status?radioId=' + radioId + '&page='+ page +'&mrpp=' + mrpp, {
                headers: {
                    'publicKey': '5234a931fdd1da574fb6133e31a6d02c'
                }
            })
        };

    }]);
}());