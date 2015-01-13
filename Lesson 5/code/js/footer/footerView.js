(function (global) {
	var FV = function (view) {
		this.view = view;
		this.actives = 0;
		this.total = 0;
		this.refreshView();
	};
	
	FV.prototype.increaseNumberOfElements = function () {
		this.total++;
		this.refreshView();
	}
	
	FV.prototype.changeActives = function (value) {
		if (value) {
			this.actives++;
		} else {
			this.actives--;
		}
		this.refreshView();
	}
	
	FV.prototype.refreshView = function () {
		var activesNumber,
			totalNumber;
		activesNumber = this.view.querySelector("#active");
		activesNumber.innerHTML = this.actives;
		totalNumber = this.view.querySelector("#total");
		totalNumber.innerHTML = this.total;
	}

	global.UAM.FooterView = FV;
}(window));