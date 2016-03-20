angular
  .module('DzikirCounter')
  .controller('DzikirCtrl', DzikirCtrl);

DzikirCtrl.$inject = ['$state', '$stateParams', 'DzikirService'];
function DzikirCtrl($state, $stateParams, DzikirService) {
  var vm = this;
  vm.dzikir = {
    arab: $stateParams.arab,
    latin: $stateParams.latin,
  };
  console.log($stateParams);

  window.dzikir = DzikirService;

  vm.count = 0;
  vm.counter = counter;

  function counter() {
    if (vm.count > 3) {

      switch (vm.dzikir.latin.split(/[ |']/g).join('').toLowerCase()) {
        case 'alhamdulillah':
          DzikirService.setAlhamdulillah();
          break;
        case 'subhanalloh':
          DzikirService.setSubhanallah();
          break;
        case 'allohuakbar':
          DzikirService.setAllahuakbar();
          break;
      }

      DzikirService.dzikir.addData();

      // $cordovaVibration.vibrate(700);
      vm.count = 33;
      setTimeout(function () {
        $state.go('main.listdzikir');
      }, 700);

      return vm.count;
    } else {
      // $cordovaVibration.vibrate(300);
      vm.count += 1;
      return vm.count;
    }
  }
}
