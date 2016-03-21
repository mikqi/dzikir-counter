angular
  .module('DzikirCounter')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = ['$scope'];
function AboutCtrl($scope) {
  $scope.popover.hide();
}
