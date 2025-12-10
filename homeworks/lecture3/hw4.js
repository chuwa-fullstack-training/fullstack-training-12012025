function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
};

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    Shape.call(this);
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// 4. implement a method area for Circle class
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
};
// 5. implement a method circumference for Circle class
Circle.prototype.circumference = function() {
    return 2 * Math.PI * this.radius;
};

// 6. change all code above to use ES6 class syntax
class ShapeES6 {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

class TriangleES6 extends ShapeES6 {
    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class CircleES6 extends ShapeES6 {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

// test your code
let tri = new Triangle(3, 4, 5);
console.log(tri.getType()); // Output: triangle
console.log(tri.getPerimeter()); // Output: 12
console.log(tri.getArea()); // Output: 6

let circ = new Circle(5);
console.log(circ.getType()); // Output: circle
console.log(circ.area()); // Output: 78.53981633974483
console.log(circ.circumference()); // Output: 31.41592653589793

let triES6 = new TriangleES6(3, 4, 5);
console.log(triES6.getType()); // Output: triangle
console.log(triES6.getPerimeter()); // Output: 12
console.log(triES6.getArea()); // Output: 6

let circES6 = new CircleES6(5);
console.log(circES6.getType()); // Output: circle
console.log(circES6.area()); // Output: 78.53981633974483
console.log(circES6.circumference()); // Output: 31.41592653589793  