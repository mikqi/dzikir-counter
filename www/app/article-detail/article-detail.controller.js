angular
  .module('DzikirCounter')
  .controller('ArticleDetailCtrl', ArticleDetailCtrl);

ArticleDetailCtrl.$inject = ['$stateParams', 'ArticleDetailService', '$ionicLoading'];
function ArticleDetailCtrl($stateParams, ArticleDetailService, $ionicLoading) {
  var vm = this;

  $ionicLoading.show({
    template: '<ion-spinner icon="android" class="spinner-calm"> </ion-spinner>',
  });

  vm.title = $stateParams.title.replace(/-/g, ' ');

  ArticleDetailService.getArticle($stateParams.path, $stateParams.title).then(getArticle);
  function getArticle(article) {
    $ionicLoading.hide();
    vm.article = article.data;
    console.log(article);
  }
}
