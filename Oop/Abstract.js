//https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript
//This class can't be instantiated, but can be extended. 

//--- (1) Abstract Method
console.log(`
--- (1) ---`)

/**
 @constructor
 @abstract
 */
var Animal = function () {
    if (this.constructor === Animal) {
        throw new Error("Can't instantiate abstract class!");
    }
    // Animal initialization...
};

/**
 @abstract
 */
Animal.prototype.say = function () {
    throw new Error("Abstract method!");
}

var Cat = function () {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function () {
    console.log('meow');
}

var cat = new Cat();
cat.say();


//--- (2)
console.log(`
--- (2) ---`);

/**
 * Abstract Class Animal.
 *
 * @class Animal
 */
class Animal1 {

    constructor() {
        if (this.constructor == Animal1) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    say() {
        throw new Error("Method 'say()' must be implemented.");
    }
    eat() {
        console.log("eating");
    }
}

/**
 * Dog.
 *
 * @class Dog
 * @extends {Animal}
 */
class Dog extends Animal1 {
    say() {
        console.log("bark");
    }
}

/**
 * Cat.
 *
 * @class Cat
 * @extends {Animal}
 */
class Cat1 extends Animal1 {
    say() {
        console.log("meow");
    }
}

/**
 * Horse.
 *
 * @class Horse
 * @extends {Animal}
 */
class Horse extends Animal1 { }


new Dog().eat(); // eating
new Cat1().eat(); // eating
new Horse().eat(); // eating

new Dog().say(); // bark
new Cat1().say(); // meow

try {
    new Horse().say(); // Error: Method say() must be implemented.
} catch (error) {
    console.log(error)
}

try {
    new Animal1(); // Error: Abstract classes can't be instantiated.
} catch (error) {
    console.log(error)
}


