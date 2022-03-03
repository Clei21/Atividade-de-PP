class Animal{
    private name:string;
    private birthDate:string;
    private height:number;

    constructor(name:string, birthDate:string, height:number){
        this.name = name;
        this.birthDate = birthDate;
        this.height = height;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public getBirthDate():string{
        return this.birthDate;
    }

    public setBirthDate(birthDate:string):void{
        this.birthDate = birthDate;
    }

    public getHeight():number{
        return this.height;
    }

    public setHeight(height:number):void{
        this.height = height;
    }

    public walk():void{
        console.log('Start walking...')
    }
}

class Dog extends Animal{
    private color:string;
    private breed:string;
    private isFurry:boolean;

    constructor(name:string, birthDate:string, height:number,color:string, breed:string, isFurry:boolean){
        super(name, birthDate, height);
        this.color = color;
        this.breed = breed;
        this.isFurry = isFurry;
    }

    getColor(){
        return this.color;
    }

    setColor(color:string){
        this.color = color;
    }

    getBreed(){
        return this.breed;
    }

    setBreed(breed:string){
        this.breed = breed;
    }

    getIsFurry(){
        return this.isFurry;
    }

    setIsFurry(isFurry:boolean){
        this.isFurry = isFurry;
    }

    public walk(): void {
        console.log("Dog is walking");
    }
}

const dog = new Dog('ManoBro', '02/12/2020', 0.5,'branco com listras' ,'Vira-lata', true);

dog.walk();