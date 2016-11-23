interface SquareFunction {
    (x:number): number;
}

var squareBasic:SquareFunction = function (num:number) {
    return num * num;
}

interface Circle {
    x: number,
    y: number,
    radius: number
}

var circuler = function (c: Circle) {
    return c.x+ c.y;
}

circuler({x:10, y:30, radius:20});