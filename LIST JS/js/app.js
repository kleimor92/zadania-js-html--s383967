window.addEventListener('DOMContentLoaded', function () {
    //After the page structure is loaded

    var store = new UAM.Store();

    var inputView = new UAM.InputView(document.querySelector('#inputview'));   //podpięcie eventa do buttona
    var listView = new UAM.ListView(document.querySelector('#listview'));   //tutaj metody dodające nowe elementy itd
    var footerView = new UAM.FooterView(document.querySelector('#footerview'));

    new UAM.InputCtrl(inputView, store);  //wywołuje dodanie do store
    new UAM.ListCtrl(listView, store);   //spr, czy dodało element do store
    new UAM.FooterCtrl(footerView, store);
});
