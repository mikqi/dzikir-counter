'use strict';

angular
  .module('DzikirCounter')
  .controller('AsmaulCtrl', AsmaulCtrl);

AsmaulCtrl.$inject = ['$log', '$state', 'AsmaulHusnaService'];

function AsmaulCtrl($log, $state, AsmaulHusnaService) {
  var vm = this;

  AsmaulHusnaService.getAsmaulHusna().then(getAsmaulData);
  function getAsmaulData(data) {
    console.log(data);
    vm.asmaul = data.data;
  }

  vm.goTo = goTo;

  function goTo(arab, latin) {
    console.log(arab, latin);
    $state.go('main.dzikir', {
      arab: arab,
      latin: latin,
    });
  }

  vm.start = start;

  function start() {
    $state.go('main.listdzikir');
  }
}
