UAM.Store = function () {
    UAM.EventEmitter.call(this);
    this.data = [];
    this.active = 0;
    this.total = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
    this.data.push(data);
    this.total = this.total + 1;
    this.emit('addedToStore', data);
    this.emit('updatedCounter');
};

UAM.Store.prototype.addActive = function () {
    this.active = this.active - 1;
    this.emit('updatedCounter');
};

UAM.Store.prototype.removeActive = function () {
    this.active = this.active + 1;
    this.emit('updatedCounter');
};

UAM.Store.prototype.update = function (id, data) {
};
