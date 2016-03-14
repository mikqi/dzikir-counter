angular.module('starter.controllers')
  .factory('Dzikir', function() {
    return {
      jumlahDzikir: 0,
      image: 0,
      tipeDzikir: '',
      dzikirCount: [],
      articles: [],
    };
  });
