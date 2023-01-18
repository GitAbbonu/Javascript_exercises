// # Classes - Exercise 20

// Define a class called `AreaCalculator`. Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter. The method will let you calculate the square, the rectangle and the circle area.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  p = 3.14;
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(geoFig) {
    if (geoFig instanceof Square) {
      return geoFig.side * geoFig.side;
    } else if (geoFig instanceof Rectangle) {
      return geoFig.width * geoFig.height;
    } else if (geoFig instanceof Circle) {
      return geoFig.radius * geoFig.radius * geoFig.p;
    } else {
      return 0;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
