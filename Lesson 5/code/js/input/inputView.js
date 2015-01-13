(function (global) {
	var IV = function (v) {
		UAM.EventEmitter.call(this);
		this.view = v;
		var button = document.getElementById("button");
		button.addEventListener("click", this.emitAdding.bind(this));
	};
	
	UAM.utils.inherits(UAM.EventEmitter, IV);
	
	IV.prototype.emitAdding = function () {
		var inputField = this.view.querySelector("#input"),
			todo = inputField.value;
		this.emit('addToStore', todo);
		inputField.value = '';
	};

	global.UAM.InputView = IV;
}(window));