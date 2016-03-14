'use strict';

angular
  .module('DzikirCounter')
  .controller('IntroCtrl', IntroCtrl);

IntroCtrl.$inject = ['$log', '$state'];

function IntroCtrl($log, $state) {
  var vm = this;

  vm.start = start;

  function start() {
    $state.go('main.listdzikir');
  }
}
