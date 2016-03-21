'use strict';
angular.module('DzikirCounter')
  .controller('MenuCtrl', function ($log, $ionicPopover, $scope) {
    var vm = this;

    vm.intro = intro;

    function intro() {
      window.localStorage.removeItem('intro');
    }

    var template = '<ion-popover-view> <ion-content> <div class="list"> <a class="item item-icon-left" ui-sref="main.about"> <i class="icon ion-help-circled"></i> About</a> </div> </ion-content> </ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope,
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
      console.log($event);
    };

    $scope.closePopover = function () {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });

    $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);

  });
