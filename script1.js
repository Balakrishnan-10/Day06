// Question : 2 
//Create a class in Circle:
class circle{
  constructor(radius,color){
  this.radius = radius
  this.color = color
  }
  getRadius(){
  return `The Radius of the circle is ${this.radius}`
  }
  getColor(){
    return `The Color of the circle is ${this.color}` 
  }
  getArea(){
    return `The Area of the circle is ${(Math.PI*this.radius*this.radius)}`
  }
  getCircumference(){
    return `The Circumference of the circle is ${2*Math.PI*this.radius}`
  }
}
var c1 = new circle(1,"red");
console.log(c1.getRadius());
console.log(c1.getColor());
console.log(c1.getArea());
console.log(c1.getCircumference());