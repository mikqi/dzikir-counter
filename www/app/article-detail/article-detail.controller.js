angular
  .module('DzikirCounter')
  .controller('ArticleDetailCtrl', ArticleDetailCtrl);

ArticleDetailCtrl.$inject = ['$stateParams', 'ArticleDetailService'];
function ArticleDetailCtrl($stateParams, ArticleDetailService) {
  var vm = this;
  console.log($stateParams);

  vm.title = $stateParams.title.replace(/-/g, ' ');

  ArticleDetailService.getArticle($stateParams.path, $stateParams.title).then(getArticle);
  function getArticle(article) {
    vm.article = article.data;
    console.log(article);
  }
}
