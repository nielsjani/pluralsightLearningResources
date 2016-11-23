class Engine {
    constructor(public horsePower:number, public type:string) {
        //publics are automatically assigned to fields
    }
}

class OtherCar {
    private _engine:Engine;

    constructor(engine:Engine) {
        this.engine = engine;
    }

    get engine():Engine {
        return this._engine;
    }

    set engine(value:Engine) {
        if (value != undefined) {
            this._engine = value;
        }
    }

    start() {
        alert("Starting engine " + this._engine.type);
    }
}

window.onload = function () {
    new OtherCar(new Engine(1, "V9")).start();
};