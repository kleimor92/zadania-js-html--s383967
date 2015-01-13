(function (global) {
	var FC = function (v, s) {
		UAM.EventEmitter.call(this);
		this.view = v;
		this.store = s;
		var that = this;
		
		this.store.on('added', that.increaseNumberOfElements, this);	
		this.store.on('stateChanged', that.changeActives, this);
	};
	
	FC.prototype.increaseNumberOfElements = function () {
		this.view.increaseNumberOfElements();
	}

	FC.prototype.changeActives = function (element) {
		this.view.changeActives(element.active);
	}
	
	global.UAM.FooterCtrl = FC;
}(window));