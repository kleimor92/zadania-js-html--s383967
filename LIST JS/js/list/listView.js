(function (global) {
    var LV = function (v) {
        UAM.EventEmitter.call(this);
        this.view = v;
    };

    UAM.utils.inherits(UAM.EventEmitter, LV);

    LV.prototype.addElementToView = function (todo, that) {
        if (todo != '') {
            var li = document.createElement("li");
            li.innerHTML = todo;
            li.className = 'active';
            var list = document.getElementById("todos");
            list.appendChild(li);

            li.addEventListener("click", function () {
                //console.log('zmiana stanu aktywności');
                //console.log(li.innerText);
                //console.log(that);
                if (li.className == 'active') {
                    li.className = '';
                    that.emit('inactiveSet');
                } else {
                    li.className = 'active';
                    that.emit('activeSet');
                }
            });

        }
    }
    ;
    global.UAM.ListView = LV;
}(window)
)
;