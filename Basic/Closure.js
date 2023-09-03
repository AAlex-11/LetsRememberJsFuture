//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

console.log(`
--- (1) ---`)

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

//-- (2) var are either function-scoped or global-scoped. This can be tricky, because blocks with curly braces do not create scopes
console.log(`
--- (2) ---`)

if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);

//-- (3) let and const allow you to create block-scoped variables
console.log(`
--- (3) ---`)

if (Math.random() > 0.5) {
    const y = 1;
} else {
    const y = 2;
}

try {
    console.log(y)
} catch (error) {
    console.log(error.stack)
}

//--- (4) Closure
console.log(`
--- (4) ---`)

function makeFunc() {
    const name = "Mozilla"
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

//--- (5) makeAdder is a function factory, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.
console.log(`
--- (5) ---`)

//add5 and add10 both form closures. They share the same function body definition, but store different lexical environments. 
//In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

//-- (6) Emulating private methods with closures, in this example each closure had its own lexical environment
console.log(`
--- (6) ---`)

const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.


//--- (7) The shared lexical environment is created in the body of an anonymous function, 
console.log(`
--- (7) ---`)

// which is executed as soon as it has been defined (also known as an IIFE).

const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

//--- (8) Every closure has three scopes:
console.log(`
--- (8) ---`)

//Local scope (Own scope)
//Enclosing scope (can be block, function, or module scope)
//Global scope

// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20

//-- (9) the same without anonimous functions
console.log(`
--- (9) ---`)

// global scope
function sum1(a) {
    return function sum2(b) {
        return function sum3(c) {
            // outer functions scope
            return function sum4(d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

const sum2 = sum1(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20

//--- (10) ---
console.log(`
--- (10) ---`)

//Closures can capture variables in block scopes and module scopes as well. 
//For example, the following creates a closure over the block-scoped variable y

function outer() {
    let getY;
    {
        const y = 6;
        getY = () => y;
    }
    console.log(typeof y); // undefined
    console.log(getY()); // 6
}

outer();

//--- (11) ---
console.log(`
--- (11) ---`)

//Closures over modules can be more interesting.
// module exports a pair of getter-setter functions, which close over the module-scoped variable x. 
//Even when x is not directly accessible from other modules, it can be read and written with the functions.

// myModule.js
/*
let y = 5;
export const getX = () => y;
export const setX = (val) => {
    y = val;
};
*/

