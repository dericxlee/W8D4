function surrogate(){
    surrogate.prototype = SuperClass.prototype;
    Subclass.prototype = new surrogate();
    Subclass.prototype.constructor = Subclass;

}

Function.prototype.inherits = function(SuperClass){
    surrogate();
}

function MovingObject (name) {
    this.name = name;

    this.move = function(){
        console.log(`${name} is moving.`);
    }
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

let ship = new Ship('ship');
ship.move();