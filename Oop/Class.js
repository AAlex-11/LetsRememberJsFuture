let T = require('./tracePrototypeChainOf.js');

//--- (1) Example of Static constructor and  instanceof / @@hasInstance  see on In.js
//--- (1) Super.js
//--- (1) Function.js

//Classes working always in strict mode. 

//--- (2) encapsulation private field
console.log(`
--- (2) ---`)

class Color {
    // Declare: every Color instance has a private field called #values.
    #values;
    constructor(r, g, b) {
        this.#values = [r, g, b];
    }
    getRed() {
        return this.#values[0];
    }
    setRed(value) {
        this.#values[0] = value;
    }
}

const red = new Color(255, 0, 0);
console.log(red.getRed());

//--- (3) Accessor fields
console.log(`
--- (3) ---`)

class Color1 {
    constructor(r, g, b) {
        this.values = [r, g, b];
    }
    get red() {
        return this.values[0];
    }
    set red(value) {
        this.values[0] = value;
    }
}

const red1 = new Color1(255, 0, 0);
red1.red = 0;
console.log(red1.red); // 0

//--- (4) Bound methods in classes , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
console.log(`
--- (4) ---`)

class Car {
    constructor() {
        // Bind sayBye but not sayHi to show the difference
        this.sayBye = this.sayBye.bind(this);
    }
    sayHi() {
        console.log(`Hello from ${this.name}`);
    }
    sayBye() {
        console.log(`Bye from ${this.name}`);
    }
    get name() {
        return "Ferrari";
    }
}

class Bird {
    get name() {
        return "Tweety";
    }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
console.log(bird.sayHi()); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
console.log(bird.sayBye()); // Bye from Ferrari
