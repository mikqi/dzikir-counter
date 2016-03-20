'use strict';

angular
  .module('DzikirCounter')
  .controller('StatistikCtrl', StatistikCtrl);

StatistikCtrl.$inject = ['$log', 'StatistikService', '$scope'];

function StatistikCtrl($log, StatistikService, $scope) {
  var vm = this;
  vm.stat = StatistikService.dataMingguan;
  var data = StatistikService.dataMingguan;
  console.log(StatistikService.dataMingguan.tujuhHari);
  console.log(StatistikService.dataMingguan.getTujuhHari);

  vm.doRefresh = doRefresh;
  function doRefresh() {

    vm.data = [
      [data.tujuhHari, data.enamHari, data.limaHari, data.empatHari, data.tigaHari, data.duaHari, data.satuHari],
    ];
    $scope.$broadcast('scroll.refreshComplete');
  }

  vm.labels = ['7 Hari', '6 Hari', '5 Hari', '4 Hari', '3 Hari', '2 Hari', '1 Hari'];
  vm.series = ['Series A'];

  vm.data = [
    [data.tujuhHari, data.enamHari, data.limaHari, data.empatHari, data.tigaHari, data.duaHari, data.satuHari],
  ];
}
