'use strict';

angular
  .module('DzikirCounter')
  .controller('ArticleCtrl', ArticleCtrl);

ArticleCtrl.$inject = ['$log', '$state'];

function ArticleCtrl($log, $state) {
  var vm = this;

  vm.toKategori = toKategori;

  function toKategori(kategori) {
    $log.log(kategori);
  }
}
