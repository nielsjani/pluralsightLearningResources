var Engine = (function () {
    function Engine(horsePower, type) {
        this.horsePower = horsePower;
        this.type = type;
        //publics are automatically assigned to fields
    }
    return Engine;
})();
var OtherCar = (function () {
    function OtherCar(engine) {
        this.engine = engine;
    }
    Object.defineProperty(OtherCar.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value != undefined) {
                this._engine = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    OtherCar.prototype.start = function () {
        alert("Starting engine " + this._engine.type);
    };
    return OtherCar;
})();
window.onload = function () {
    new OtherCar(new Engine(1, "V9")).start();
};
//# sourceMappingURL=classes.js.map