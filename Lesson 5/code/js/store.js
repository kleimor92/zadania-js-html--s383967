UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (element, status) {
	var todo = {'id': this.data.length, 'name': element, 'active': status}
	this.data.push(todo);
	this.emit('added', todo);
};

UAM.Store.prototype.changeState = function (todo) {
	var that = this;
	this.data.forEach(function (element) {
		if (element.id === todo.id) {
			element.active = !element.active;
			that.emit('stateChanged', element);
		}
	});
};
