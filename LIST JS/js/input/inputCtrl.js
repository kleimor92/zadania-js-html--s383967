(function (global) {
    var IC = function (v, s) {
        UAM.EventEmitter.call(this);
        this.view = v;
        this.store = s;
        var that = this;

        this.view.on('addedToStore', function (todo) {
            if (todo != '') {
                that.store.add(todo);
            }
        });
    };

    UAM.utils.inherits(UAM.EventEmitter, IC);
    global.UAM.InputCtrl = IC;
}(window));