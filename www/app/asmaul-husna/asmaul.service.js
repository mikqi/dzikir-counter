angular
  .module('DzikirCounter')
  .factory('AsmaulHusnaService', AsmaulHusnaService);

AsmaulHusnaService.$inject = ['$http', '$q'];
function AsmaulHusnaService($http, $q) {
  return {
    getAsmaulHusna: getAsmaulHusna,
  };

  function getAsmaulHusna() {
    var def = $q.defer();

    return $http.get('asmaul-husna.json')
      .success(getDataLaporan)
      .error(errorDataLaporan);

    function getDataLaporan(response) {
      def.resolve(response);
    }

    function errorDataLaporan() {
      def.reject('Gagal ambil data wilayah');
    }

    return def.promise;
  }
}
