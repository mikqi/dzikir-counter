'use strict';
angular.module('DzikirCounter')
  .controller('MenuCtrl', function ($log) {
    var vm = this;

    vm.intro = intro;

    function intro() {
      window.localStorage.removeItem('intro');
    }

    $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);

  });
