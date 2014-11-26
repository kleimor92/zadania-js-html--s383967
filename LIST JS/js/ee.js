(function (global) {
    var EE;

    if (!global.UAM) {
        global.UAM = {};
    }

    EE = function () {
        this.listeners = new Array();
    };

    EE.prototype.on = function (eventName, listener, context) {
        if (this.listeners.length == 0) {
            this.listeners['0'] = 1;
        }
        this.listeners[this.listeners['0']] = new Array(eventName, listener, context);
        this.listeners['0']++;
        return (function (counter, ctx) {
            return function () {
                ctx.remove(counter, ctx);
            }
        })(this.listeners['0'] - 1, this);
    };

    EE.prototype.emit = function (eventName) {
        var args = Array.prototype.slice.call(arguments);
        var args = args.splice(1, args.length - 1);
        for (key in this.listeners) {
            var eventNamecheck = this.listeners[key]['0'];
            var listener = this.listeners[key]['1'];
            var context = this.listeners[key]['2'];
            if (eventNamecheck === eventName) {
                listener.apply(context, args)
            }
        }
    };

    EE.prototype.remove = function () {
        that = arguments['1'];
        delete that.listeners[arguments['0']];

    };
    global.UAM.EventEmitter = EE;

}(window));