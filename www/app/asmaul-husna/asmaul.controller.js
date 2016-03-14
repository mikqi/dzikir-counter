'use strict';

angular
  .module('DzikirCounter')
  .controller('AsmaulCtrl', AsmaulCtrl);

AsmaulCtrl.$inject = ['$log', '$state'];

function AsmaulCtrl($log, $state) {
  var vm = this;

  vm.start = start;

  function start() {
    $state.go('main.listdzikir');
  }
}
