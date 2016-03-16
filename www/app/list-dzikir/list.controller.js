'use strict';

angular
  .module('DzikirCounter')
  .controller('ListDzikir', ListDzikir);

ListDzikir.$inject = ['$log', '$state', 'ListDzikirService'];
function ListDzikir($log, $state, ListDzikirService) {
  var vm = this;
  vm.ListDzikir = ListDzikirService.getListDzikir();

  console.log(vm.list);
}
