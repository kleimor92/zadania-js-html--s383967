(function (global) {
	var LC = function (v, s) {
		UAM.EventEmitter.call(this);
		this.view = v;
		this.store = s;
		var that = this;
		
		this.store.on('added', that.addElementToView, this);
		this.store.on('stateChanged', that.stateChanged, this);
		this.view.on('changeState', that.changeState, this);
		this.view.on('saveData', that.saveData, this);

		this.loadData();		
	};
	
	LC.prototype.addElementToView = function (todo) {
		this.view.addElementToView(todo);
	}
	
	LC.prototype.changeState = function (todo) {
		this.store.changeState(todo);
	}
	
	LC.prototype.stateChanged = function (todo) {
		this.view.changeState(todo);
	}

	LC.prototype.saveData = function () {
		UAM.Http.request('/api/todos', 'POST', this.store.data, LC.prototype.confirm);
	}

	LC.prototype.confirm = function () {
		console.log("Done.");
	}

	LC.prototype.loadData = function () {
		UAM.Http.loadData(this, LC.prototype.handleLoadedData);
	}

	LC.prototype.handleLoadedData = function (res) {
		var that = this;
		res.forEach(function (element) {
			that.store.add(element.name, element.active);
		});
	}

	global.UAM.ListCtrl = LC;
}(window));