angular
  .module('DzikirCounter')
  .factory('StatistikService', StatistikService);

StatistikService.$inject = [];
function StatistikService() {

  var today = new Date();

  var data = JSON.parse(window.localStorage.getItem('data'));

  if (data !== null) {
    for (var i = 0; i < data.length; i++) {
      data[i].jsDate = new Date(data[i].jsDate);
    }
  }

  var sevenDaysAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
  var sixDaysAgo = new Date(today.getTime() - (6 * 24 * 60 * 60 * 1000));
  var fiveDaysAgo = new Date(today.getTime() - (5 * 24 * 60 * 60 * 1000));
  var fourDaysAgo = new Date(today.getTime() - (4 * 24 * 60 * 60 * 1000));
  var threeDaysAgo = new Date(today.getTime() - (3 * 24 * 60 * 60 * 1000));
  var twoDaysAgo = new Date(today.getTime() - (2 * 24 * 60 * 60 * 1000));
  var oneDaysAgo = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000));

  var getTujuhHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, sixDaysAgo) && _.gte(o.jsDate, sevenDaysAgo);
  });

  var getEnamHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, fiveDaysAgo) && _.gte(o.jsDate, sixDaysAgo);
  });

  var getLimaHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, fourDaysAgo) && _.gte(o.jsDate, fiveDaysAgo);
  });

  var getEmpatHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, threeDaysAgo) && _.gte(o.jsDate, fourDaysAgo);
  });

  var getTigaHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, twoDaysAgo) && _.gte(o.jsDate, threeDaysAgo);
  });

  var getDuaHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, oneDaysAgo) && _.gte(o.jsDate, twoDaysAgo);
  });

  var getSatuHari = _.filter(data, function (o) {
    return _.lte(o.jsDate, today) && _.gte(o.jsDate, oneDaysAgo);
  });

  var satuHari = _.sumBy(getSatuHari, function (o) {
    return o.qty;
  });

  var duaHari = _.sumBy(getDuaHari, function (o) {
    return o.qty;
  });

  var tigaHari = _.sumBy(getTigaHari, function (o) {
    return o.qty;
  });

  var empatHari = _.sumBy(getEmpatHari, function (o) {
    return o.qty;
  });

  var limaHari = _.sumBy(getLimaHari, function (o) {
    return o.qty;
  });

  var enamHari = _.sumBy(getEnamHari, function (o) {
    return o.qty;
  });

  var tujuhHari = _.sumBy(getTujuhHari, function (o) {
    return o.qty;
  });

  var dataMingguan = {
    satuHari: satuHari,
    duaHari: duaHari,
    tigaHari: tigaHari,
    empatHari: empatHari,
    limaHari: limaHari,
    enamHari: enamHari,
    tujuhHari: tujuhHari,
    getTujuhHari: getTujuhHari,
  };

  return {
    dataMingguan: dataMingguan,
  };
}
