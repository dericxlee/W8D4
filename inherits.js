Function.prototype.inherits = function(SuperClass){
    let that = this;
    function surrogate() {}
        surrogate.prototype = SuperClass.prototype;
        that.prototype = new surrogate();
        that.prototype.constructor = that;
        // console.log(that.prototype.constructor)
}

// Function.prototype.inherits = function(SuperClass){
//     let that = this;
//     that.prototype = Object.create(SuperClass.prototype);
//     that.prototype.constructor = that;
// }

function MovingObject (name) {
    this.name = name;
   
}

MovingObject.prototype.move = function(){
    console.log(this.name + ' is moving.');
}

function Ship (name) {
    this.name = name;

    this.fly = function(){
        console.log(`The ship ${name} is flying.`);
    }
}

Ship.inherits(MovingObject);

function Asteroid (name) {
    this.name = name;

    this.collapse = function(){
        console.log(`The ${name} is collapsing.`);
    }
}

Asteroid.inherits(MovingObject);

// let obj = new MovingObject('obj1');
let ship = new Ship('ship');
let ast = new Asteroid('ast');
let obj1 = new MovingObject('obj1');
// obj.move();
ship.move();
ast.move();
console.log(Ship.prototype === MovingObject.prototype)
console.log(Asteroid.prototype === MovingObject.prototype)
