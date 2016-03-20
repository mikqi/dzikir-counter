angular
  .module('DzikirCounter')
  .factory('KategoriService', KategoriService);

KategoriService.$inject = ['$q', '$http'];
function KategoriService($q, $http) {
  var url = 'https://codelabs-islamicapps.azurewebsites.net/';
  return {
    getArticles: getArticles,
  };
  function getArticles(kategori) {
    var def = $q.defer();
    console.log(url + kategori);
    return $http.get(url + kategori)
      .success(getData)
      .error(errorData);

    function getData(response) {
        def.resolve(response);
      }

    function errorData() {
        def.reject('Gagal ambil data');
      }

    return def.promise;
  }
}
