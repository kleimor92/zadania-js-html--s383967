(function (global) {
    var FC = function (v, s) {
        UAM.EventEmitter.call(this);
        this.view = v;
        this.store = s;
        var that = this;

        this.store.on('updatedCounter', function () {
            //console.log('złapałem updatedCounter');
            console.log();
            that.view.renderCounter(that.store.active, that.store.total);
        });

    };

    UAM.utils.inherits(UAM.EventEmitter, FC);
    global.UAM.FooterCtrl = FC;
}(window));