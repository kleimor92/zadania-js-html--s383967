(function (global) {
	var LV = function (view) {
		UAM.EventEmitter.call(this);
		this.view = view;
		var button = document.getElementById("saveButton");
		button.addEventListener("click", this.saveData.bind(this));
	};
	
	UAM.utils.inherits(UAM.EventEmitter, LV);

	LV.prototype.saveData = function () {
		this.emit('saveData');
	}
	
	LV.prototype.addElementToView = function (todo) {
		var li = document.createElement("li"),
			that = this,
			list = this.view.querySelector("#todos");
		li.innerHTML = todo.name;
		li.setAttribute("id", 'id' + todo.id);
		li.addEventListener("click", function () {
										that.emit('changeState', todo);
									});
		if (todo.active) {
			li.classList.add('active');
		}
		else {
			li.classList.add('inactive');
		}
		list.appendChild(li);
	}
	
	LV.prototype.changeState = function (todo) {
		var that = this,
			element = this.view.querySelector('#id'+ todo.id);
		if (todo.active) {
			element.classList.remove('inactive');
			element.classList.add('active');
		} else {
			element.classList.remove('active');
			element.classList.add('inactive');
		}
	}

	global.UAM.ListView = LV;
}(window));