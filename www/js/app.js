// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic.contrib.drawer'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    .state('intro', {
      url: '/intro',
      templateUrl: 'app/intro/intro.html',
      controller: 'IntroCtrl as intro',

      // controllerAs: 'intro'
    })

    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: '../templates/menu.html',
      controller: 'MenuCtrl as menu',
    })
    .state('main.listdzikir', {
      url: '/list',
      views: {
        pageContent: {
          templateUrl: 'app/list-dzikir/list-dzikir.html',
          controller: 'ListDzikir as list',
        },
      },
    })
    .state('main.asmaul', {
      url: '/asmaul',
      views: {
        pageContent: {
          templateUrl: 'app/asmaul-husna/asmaul.html',
          controller: 'AsmaulCtrl as asmaul',
        },
      },
    })
    .state('main.statistik', {
      url: '/statistik',
      views: {
        pageContent: {
          templateUrl: 'app/statistik/statistik-dzikir.html',
          controller: 'StatistikCtrl as stat',
        },
      },
    });
});
