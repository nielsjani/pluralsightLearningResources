var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    function Shape(length, height) {
        this.length = length;
        this.height = height;
    }
    Shape.prototype.omtrek = function () {
        var calc = (this.length * 2) + (this.height * 2);
        return "Omtrek:" + calc;
    };
    return Shape;
})();
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        _super.call(this, length, length);
        this.length = length;
    }
    return Square;
})(Shape);
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(length, name) {
        _super.call(this, length, length);
        this.length = length;
        this.name = name;
    }
    //overriding
    Circle.prototype.omtrek = function () {
        return "FUck you " + this.name;
    };
    return Circle;
})(Shape);
var OtherShape = (function () {
    function OtherShape(length) {
        this.length = length;
    }
    OtherShape.prototype.omtrek = function () {
        return "x";
    };
    return OtherShape;
})();
alert(new Shape(5, 10).omtrek()); //30
alert(new Square(5).omtrek()); //20
alert(new Circle(5, "Koen Wauters").omtrek()); //Fuck you Koen Wauters
//# sourceMappingURL=inheritance.js.map