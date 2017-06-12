function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return `(${this.x},${this.y})`
}

function Side(num) {
  this.length = num
}

function Shape() {

}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function (x, y) {
  this.addToPlane(x, y)
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function (radius) {
  return this.radius * 2
}

Circle.prototype.area = function (radius) {
  return Math.PI * Math.pow(this.radius, 2)
}

Circle.prototype.circumference = function (radius) {
  return (Math.PI * this.radius * 2)
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function (sides) {
  var sum = 0
  for (var i = 0; i < this.sides.length; i++) {
    sum += this.sides[i].length
  }
  return sum
}

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this)
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function (width, height) {
  return (this.width * this.height)
}

function Square(side) {
  Rectangle.call(this, side, side, side, side)
  this.side = side
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function () {
  for (var key in this) {
    return key
  }
}

function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
