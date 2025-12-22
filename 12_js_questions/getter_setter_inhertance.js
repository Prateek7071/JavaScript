//complete this code
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
