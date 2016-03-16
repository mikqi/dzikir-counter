angular
  .module('DzikirCounter')
  .factory('ListDzikirService', ListDzikirService);

ListDzikirService.$inject = ['$state'];

function ListDzikirService($state) {
  return {
    getListDzikir: getListDzikir,
  };

  function getListDzikir() {
    var list = [{
      arab: 'سُبْحَانَ اللهِ',
      latin: 'SUB\'HANALLOH',
      url: goTo,
    }, {
      arab: 'اَلْحَمْدُ ِللهِ',
      latin: 'AL\'HAMDULILLAH',
      url: goTo,
    }, {
      arab: 'لاَ إِلَهَ إِلاَّ اللهُ',
      latin: 'LA ILAHA ILLALLOH',
      url: goTo,
    }, {
      arab: 'اللهُ أَكْبَرُ',
      latin: 'ALLOHU AKBAR',
      url: goTo,
    },
  ];
    return list;
  }

  function goTo() {
    console.log(this.arab);
    $state.go('main.dzikir', {
      arab: this.arab,
      latin: this.latin,
    });
  }
}
