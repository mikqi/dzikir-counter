angular
  .module('DzikirCounter')
  .controller('DzikirCtrl', DzikirCtrl);

DzikirCtrl.$inject = ['$state', '$stateParams', '$cordovaVibration'];
function DzikirCtrl($state, $stateParams, $cordovaVibration) {
  var vm = this;
  vm.dzikir = {
    arab: $stateParams.arab,
    latin: $stateParams.latin,
  };
  console.log($stateParams);

  vm.count = 0;
  vm.counter = counter;

  function counter() {
    if (vm.count > 31) {
      $cordovaVibration.vibrate(700);
      vm.count = 33;
      setTimeout(function () {
        $state.go('main.listdzikir');
      }, 700);

      return vm.count;
    } else {
      $cordovaVibration.vibrate(300);
      vm.count += 1;
      return vm.count;
    }
  }
}
