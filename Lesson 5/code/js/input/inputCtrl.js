(function (global) {
	var IC = function (v, s) {
		UAM.EventEmitter.call(this);
		this.view = v;
		this.store = s;
		var that = this;
		
		this.view.on('addToStore', that.addElementToStore, this);		
	};
	
	IC.prototype.addElementToStore = function (todo) {
			if (todo != '') {
				this.store.add(todo);
			}
	}
	
	global.UAM.InputCtrl = IC;
}(window));