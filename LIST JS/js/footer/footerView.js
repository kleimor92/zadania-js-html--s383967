(function (global) {
    var FV = function (view) {
        this.view = view;
    };


    FV.prototype.renderCounter = function (active, all) {
        var footer = document.getElementById("footerview");
        footer.innerText = active + "/" + all;
    };

    global.UAM.FooterView = FV;
}(window));