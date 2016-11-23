var num = 1;
var name = "xxx";
var concat = num + name;
function sum(a, b) {
    var summed = a + b;
    return "Sum is " + summed;
}
alert(sum(10, 25)); // Sum is 35
var multiply = function (a, b) {
    return b ? a * b : a * 5;
};
console.log(multiply(10, 2)); //20
console.log(multiply(10)); //50
var plus = function (a, b) { return a + b; };
console.log(plus(10, 20)); //30
var min = function (something, another) {
    return (something.size + another.size) * (something.weight + another.weight);
};
console.log(min({ size: 10, weight: 20 }, { size: 30, weight: 40 })); //2400
//# sourceMappingURL=typesandgrammar.js.map