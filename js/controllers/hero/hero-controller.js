(function () {
  var as = angular.module('HeroMarvel', ['ngRoute']);

  as.controller('HeroCtrl', function ($scope, $location, $http, $q) {

    var ts = new Date().getTime()
    var publicKey = "5a237863b3cc2061003cbbc4fe20dc06"
    var privateKey = "fbf255068eccea6d0ef951b9f25626b57ab2fe72"

    var hash = md5(ts + privateKey + publicKey).toString();

    var baseUrl = "http://gateway.marvel.com/v1/public/";
    var complemento = "?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash;

    console.log(hash);

    $scope.getCharacters = function (val) {
      return $http.get(baseUrl + "characters" + complemento, {

      }).then(function (response) {
        $scope.charInfoArr = response.data.data.results;
        return response.data.data.results.map(function (item) {
          console.log(response.data.data.results);
          $scope.heroes = response.data.data.results;
          return item.name;
        });
      });
    };
    $scope.getCharacters();

    $scope.getCharacter = function (id) {
      axios.get(baseUrl + "/characters/" + id + complemento)
        .then(function (res) {
          console.log(res.data.data)
        })
        .catch(function (err) {
          console.log(err)
        });
    }

  });

}());