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
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
  })

  .state('app.dzikir', {
    url: '/dzikir',
    views: {
      menuContent: {
        templateUrl: 'templates/dzikir.html',
        controller: 'CounterCtrl',
      },
    },
  })

  .state('app.counter', {
      url: '/counter',
      views: {
        menuContent: {
          templateUrl: 'templates/counter.html',
          controller: 'CounterCtrl',
        },
      },
    })
    .state('app.stat-dzikir', {
      url: '/stat-dzikir',
      views: {
        menuContent: {
          templateUrl: 'templates/stat-dzikir.html',
          controller: 'StatDzikirCtrl',
        },
      },
    })

  .state('app.news-detail', {
    url: '/news/:id',
    views: {
      menuContent: {
        templateUrl: 'templates/news-detail.html',
        controller: 'NewsDetailCtrl',
      },
    },
  })

  .state('app.news', {
    url: '/news',
    views: {
      menuContent: {
        templateUrl: 'templates/news.html',
        controller: 'NewsCtrl',
      },
    },
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dzikir');
});
