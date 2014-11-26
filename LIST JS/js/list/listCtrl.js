(function (global) {
    var LC = function (v, s) {
        UAM.EventEmitter.call(this);
        this.view = v;
        this.store = s;
        var that = this;

        this.store.on('addedToStore', function () {
            //console.log(that.store.data);
            that.view.addElementToView(that.store.data[that.store.data.length - 1], that);
            //console.log(that.store.active);
            //console.log(that.store.total);
        });

        this.on('inactiveSet', function () {
            //console.log('złapałem activeSet');
            that.store.removeActive();
        });

        this.on('activeSet', function () {
            //console.log('złapałem inactiveSet');
            that.store.addActive();
        });
    };

    UAM.utils.inherits(UAM.EventEmitter, LC);
    global.UAM.ListCtrl = LC;
}
(window));