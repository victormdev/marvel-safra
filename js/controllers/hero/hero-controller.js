(function () {
  var as = angular.module('HeroMarvel', ['ngRoute']);

  as.controller('HeroCtrl', function ($scope, $location, $http, $q) {

    var ts = new Date().getTime()
    var publicKey = "5a237863b3cc2061003cbbc4fe20dc06"
    var privateKey = "fbf255068eccea6d0ef951b9f25626b57ab2fe72"

    var hash = md5(ts + privateKey + publicKey).toString();

    var baseUrl = "https://gateway.marvel.com/v1/public/";
    var complemento = "?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash;

    console.log(hash);
    $scope.char = {};
    $scope.showCharInfo = false;
    $scope.getCharacters = function (val) {
      return $http.get(baseUrl + "characters" + complemento, {
        params: {
          nameStartsWith: val,
          limit: 50,
        }

      }).then(function (response) {
        $scope.charInfoArr = response.data.data.results;
        return response.data.data.results.map(function (item) {
          console.log(response.data.data.results);
          $scope.heroes = response.data.data.results;
        });
      });
    };
    $scope.getCharacters();

    $scope.showHero = function(index){
      $scope.hero = $scope.heroes[index];
      $scope.edit = true;
      $scope.showDetails = true;
  };


  });

}());