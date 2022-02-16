class Person{
    name: string;
    age: number;
    weight: number;

    constructor(name:string, age:number, weight:number){
        this.age = age;
        this.name = name;
        this.weight = weight;
    }

    changeWeight(newWeight:number){
        this.weight = newWeight;
    }
}


class Car{
    color:string;
    brand:string;
    model:string;
    
    constructor(color:string, brand:string, model:string){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    changeColor(newColor:string){
        this.color = newColor;
    }
}

class rightTriangle{
    height:number = 0;
    base:number = 0;
    hypotenuse:number = 0;

    constructor(height:number, base:number, hypotenuse:number){
        this.height = height;
        this.base = base;
        this.hypotenuse = hypotenuse;
    }

    calculateArea(){
        console.log("calculo da area: " + this.base * this.height/2);
    }
}