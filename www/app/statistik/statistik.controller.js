'use strict';

angular
  .module('DzikirCounter')
  .controller('StatistikCtrl', StatistikCtrl);

StatistikCtrl.$inject = ['$log'];

function StatistikCtrl($log) {
  var vm = this;
  vm.hello = 'hellow';

  vm.labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];
  vm.series = ['Series A', 'Series B'];

  vm.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
  ];
}
