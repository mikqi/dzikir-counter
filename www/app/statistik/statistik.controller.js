'use strict';

angular
  .module('DzikirCounter')
  .controller('StatistikCtrl', StatistikCtrl);

StatistikCtrl.$inject = ['$log'];

function StatistikCtrl($log) {
  var vm = this;
  vm.hello = 'hellow';
}
