var num: number = 1;
var name: string = "xxx";
var concat: string = num + name;

function sum(a: number, b: number) {
    var summed: number = a+b;
    return "Sum is " +summed;
}

alert(sum(10,25)); // Sum is 35

var multiply = function(a: number, b?:number) {
    return b ? a*b : a*5;
};

console.log(multiply(10,2)); //20
console.log(multiply(10)); //50

var plus = (a: number, b:number) => a+b;

console.log(plus(10,20)); //30

var min = function(something: {size: number, weight: number}, another: {size: number, weight: number}) {
    return (something.size+another.size) * (something.weight + another.weight)
}

console.log(min({size: 10, weight:20}, {size: 30, weight: 40})); //2400