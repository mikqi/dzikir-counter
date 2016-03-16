angular
  .module('DzikirCounter')
  .controller('DzikirCtrl', DzikirCtrl);

DzikirCtrl.$inject = ['$state', '$stateParams'];
function DzikirCtrl($state, $stateParams) {
  var vm = this;
  vm.dzikir = {
    arab: $stateParams.arab,
    latin: $stateParams.latin,
  };
  console.log($stateParams);

  vm.count = 0;
  vm.counter = counter;

  function counter() {
    if (vm.count >= 33) {
      vm.count = 0;
      return vm.count;
    } else {
      vm.count += 1;
      return vm.count;
    }
  }
}
