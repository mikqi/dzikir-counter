'use strict';

angular
  .module('DzikirCounter')
  .controller('IntroCtrl', IntroCtrl);

IntroCtrl.$inject = ['$log', '$state', '$ionicHistory'];

function IntroCtrl($log, $state, $ionicHistory) {
  if (Number(window.localStorage.getItem('intro')) === 1) {
    $state.go('main.listdzikir');
  }

  var vm = this;

  vm.start = start;

  function start() {
    $state.go('main.listdzikir');
    window.localStorage.setItem('intro', 1);
  }
}
