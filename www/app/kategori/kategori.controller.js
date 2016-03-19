angular
  .module('DzikirCounter')
  .controller('KategoriCtrl', KategoriCtrl);

KategoriCtrl.$inject = ['$state', '$stateParams', 'KategoriService'];
function KategoriCtrl($state, $stateParams, KategoriService) {
  var vm = this;

  KategoriService.getArticles($stateParams.kategori).then(getList);
  function getList(data) {
    data.data.data.forEach((e, i) => {
      data.data.data[i].post.forEach((e, j) => {
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

    // console.log(vm.articles.data[parentIndex].artikel[index]);

    // i 5, 6
    var article = {
      path1: vm.articles.data[parentIndex].artikel[index].url.split('/')[4],
      path2: vm.articles.data[parentIndex].artikel[index].url.split('/')[5],
    };
    console.log(article);

    // console.log(vm.articles.data[parentIndex].artikel[index].url.split('/'));

  }

  vm.title = $stateParams.kategori.toUpperCase();
  console.log($stateParams);
}
