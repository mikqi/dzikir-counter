'use strict';

angular
  .module('DzikirCounter')
  .controller('ListDzikir', ListDzikir);

ListDzikir.$inject = ['$log', '$state'];

function ListDzikir($log, $state) {
  var vm = this;
  vm.hello = 'hello';
}
