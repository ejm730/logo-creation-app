// Parent Shape class
class Shape {
    constructor() {
        this.color = 'black'; // default color
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("The render method should be implemented by subclasses!");
    }
}

// Triangle class extending Shape
class Triangle extends Shape {
    render() {
        // SVG for a triangle using the defined color
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

// Circle class extending Shape
class Circle extends Shape {
    render() {
        // SVG for a circle using the defined color, centered at (150,100) with radius 50
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

// Square class extending Shape
class Square extends Shape {
    render() {
        // SVG for a square using the defined color, top-left at (100,50) with side length 100
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

// Exporting the classes to be used elsewhere
module.exports = {
    Triangle,
    Circle,
    Square
};