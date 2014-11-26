(function (global) {
    var IV = function (v) {
        UAM.EventEmitter.call(this);
        this.view = v;
        var button = document.getElementById("button");
        button.addEventListener("click", this.emitAdding.bind(this));
    };

    UAM.utils.inherits(UAM.EventEmitter, IV);

    IV.prototype.emitAdding = function () {
        var inputField = document.getElementById("input");
        var todo = inputField.value;
        this.emit('addedToStore', todo);
        inputField.value = '';
    };


    global.UAM.InputView = IV;
}(window));