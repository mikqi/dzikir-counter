angular
  .module('DzikirCounter')
  .controller('KategoriCtrl', KategoriCtrl);

KategoriCtrl.$inject = ['$state', '$stateParams', 'KategoriService', '$ionicLoading'];
function KategoriCtrl($state, $stateParams, KategoriService, $ionicLoading) {
  var vm = this;

  $ionicLoading.show({
    template: '<ion-spinner icon="android" class="spinner-calm"> </ion-spinner>',
  });

  KategoriService.getArticles($stateParams.kategori).then(getList);
  function getList(data) {
    $ionicLoading.hide();
    data.data.data.forEach(function (e, i) {
      data.data.data[i].post.forEach(function (e, j) {
        data.data.data[i].artikel.push({ post: data.data.data[i].post[j].trim(), url: data.data.data[i].url[j] });
      });
    });

    vm.articles = data.data;
    console.log(vm.articles);
    console.log(data);
  }

  vm.goToArticle = goToArticle;

  function goToArticle(parentIndex, index) {
    console.log(parentIndex, index);

    console.log(vm.articles.data[parentIndex].artikel[index]);

    // i 5, 6
    var article = {
      path: vm.articles.data[parentIndex].artikel[index].url.split('/')[4],
      title: vm.articles.data[parentIndex].artikel[index].url.split('/')[5],
    };
    console.log(article);

    $state.go('main.articledetail', {
      path: article.path,
      title: article.title,
    });
  }

  vm.title = $stateParams.kategori.toUpperCase();
  console.log($stateParams);
}
