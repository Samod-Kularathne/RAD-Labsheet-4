class Rectangle{
    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;

    }

    getArea(){
        return(this.width*this.height)
    }
    
}

const rec1 = new Rectangle("rectangle1","10","5");
const rec2 = new Rectangle("rectangle1","5","6");


console.log("Area of the rectangle1 ",rec1.getArea());
console.log("Area of the rectangle2 ",rec2.getArea());

