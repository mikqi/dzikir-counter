angular
  .module('DzikirCounter')
  .factory('ArticleDetailService', ArticleDetailService);

ArticleDetailService.$inject = ['$q', '$http'];
function ArticleDetailService($q, $http) {
  var detailUrl = 'http://codelabs-islamicapps.azurewebsites.net/';
  return {
    getArticle: getArticle,
  };

  function getArticle(path, title) {
    var def = $q.defer();
    console.log(detailUrl + path + '/' + title);
    return $http.get(detailUrl + path + '/' + title)
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
