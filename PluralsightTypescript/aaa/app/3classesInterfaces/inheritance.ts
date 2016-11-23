interface IShape {
    length: number,
    height?: number,
    omtrek(): string
}

class Shape implements IShape{
    constructor(public length:number, public height:number) {

    }

    omtrek() {
        var calc = (this.length * 2) + (this.height * 2);
        return "Omtrek:" + calc;
    }
}

class Square extends Shape {
    constructor(public length:number) {
        super(length, length);
    }
}

class Circle extends Shape {
    constructor(public length:number, public name: string) {
        super(length, length);
    }

    //overriding
    omtrek() {
        return "FUck you " + this.name;
    }
}

class OtherShape implements IShape {
    constructor(public length: number){

    }

    omtrek() {
        return "x";
    }
}


alert(new Shape(5,10).omtrek()); //30
alert(new Square(5).omtrek()); //20
alert(new Circle(5, "Koen Wauters").omtrek()); //Fuck you Koen Wauters