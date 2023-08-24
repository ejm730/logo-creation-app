const { Triangle, Circle, Square } = require('./shapes');

test('Circle should render correctly', () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

test('Triangle should render correctly', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Square should render correctly', () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');
});