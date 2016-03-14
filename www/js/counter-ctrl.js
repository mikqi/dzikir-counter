angular.module('starter.controllers')
  .controller('CounterCtrl', ['$scope', '$state', 'Dzikir', function($scope, $state, Dzikir) {

    $scope.title = Dzikir.tipeDzikir;
    $scope.num = 0;
    $scope.image = Dzikir.image;

    $scope.dzikir = function() {
      $scope.num += 1;
    };

    window.dzikir = Dzikir;
    $scope.finish = function() {
      localStorage.getItem('dzikir');
      console.log('finish');
      Dzikir.jumlahDzikir = $scope.num;
      Dzikir.dzikirCount.unshift({
        dzikir: Dzikir.tipeDzikir,
        jumlahDzikir: Dzikir.jumlahDzikir,
        date: new Date(),
      });
      localStorage.setItem('dzikir', JSON.stringify(Dzikir.dzikirCount));
      $state.go('app.stat-dzikir');
    };

    $scope.start = function(img, dzikir) {
      Dzikir.image = img;
      Dzikir.tipeDzikir = dzikir;

      $scope.title = dzikir;
      $scope.image = img;

      $state.go('app.counter');
    };
  },
])
  .controller('StatDzikirCtrl', ['$scope', 'Dzikir', function($scope, Dzikir) {
    $scope.dzikir = JSON.parse(localStorage.getItem('dzikir'));

    $scope.clear = function() {
      localStorage.clear();
      $scope.dzikir.splice(0, $scope.dzikir.length);

    };
  },
])
  .controller('NewsCtrl', ['$scope', '$http', 'Dzikir', function($scope, $http, Dzikir) {
    $http.get('http://localhost:8080/')
      .success(function(data) {
        console.log(data);
        Dzikir.articles = data;
        window.dzikir = Dzikir;
        $scope.articles = data;
      });
  },
])
  .controller('NewsDetailCtrl', ['$scope', '$state', 'Dzikir', function($scope, $state, Dzikir) {
    $scope.article = Dzikir.articles[0];
    console.log($scope.article);
  },
]);
