angular
  .module('DzikirCounter')
  .factory('DzikirService', DzikirService);

DzikirService.$inject = [];
function DzikirService() {

  var data = JSON.parse(window.localStorage.getItem('data')) || [];

  var dzikir = {
    data: data,
    subhanallah: false,
    alhamdulillah: false,
    allahuakbar: false,
    addData: addData,
  };

  function addData() {
    var that = this;

    if (this.subhanallah && this.alhamdulillah && this.allahuakbar) {
      console.log(this.data);
      that.data.push({
        qty: 1,
        jsDate: new Date(),
      });
      console.log('Masuk buat ubah data');
      that.subhanallah = false;
      that.alhamdulillah = false;
      that.allahuakbar = false;

      window.localStorage.removeItem('data');
      window.localStorage.setItem('data', JSON.stringify(that.data));

    }

  }

  function setSubhanallah() {
    dzikir.subhanallah = true;
    console.log('subhanallah');
  }

  function setAlhamdulillah() {
    dzikir.alhamdulillah = true;
    console.log('alhamdulillah');
  }

  function setAllahuakbar() {
    dzikir.allahuakbar = true;
    console.log('allahuakbar');
  }

  return {
    dzikir: dzikir,
    setSubhanallah: setSubhanallah,
    setAlhamdulillah: setAlhamdulillah,
    setAllahuakbar: setAllahuakbar,
  };
}
