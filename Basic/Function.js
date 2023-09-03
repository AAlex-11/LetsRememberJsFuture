//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//any function declaration to the top of the current scope

//--- (1) Constructor
console.log(`
--- (1) ---`);

const f1 = new Function("x", "y", "return x * y");
console.log(f1(2, 3))

//--- (2) Declaration
console.log(`
--- (2) ---`);

function f2(x, y) {
    return x * y;
} // No need for semicolon here
console.log(f2(3, 4))

//--- (3) Function expressions; the function is anonymous but assigned to a variable
console.log(`
--- (3) ---`);

const f3 = function (x, y) {
    return x * y;
};
console.log(f3(3, 4))

//--- (4) Expression; the function has its own name
console.log(`
--- (4) ---`);

const f4 = function funcName(x, y) {
    return x * y;
};
console.log(f4(4, 5))

//--- (5) Arrow function
console.log(`
--- (5) ---`);

const f5 = (x, y) => x * y;
console.log(f5(5, 6))


//--- (6) define Method and Get/Set function in object
console.log(`
--- (6) ---`);

const obj = {
    f6(x, y) {
        return x * y;
    },
    get f10() {
        return this.a * this.b;
    },
    a: 0,
    b: 0
};

console.log(obj.f6(6, 7), obj.f6(7, 8), obj.f10)
obj.a = 10;
obj.b = 20;
console.log(obj.f10)

//--- (7) IIFE (Immediately Invoked Function Expression)
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE
console.log(`
--- (7) ---`);;

(function () {
    console.log(1)
    return
})();

//--- (8) the same with arrow
console.log(`
--- (8) ---`);

(() => {
    console.log(2)
    return
})();

//--- (9) Async see order
console.log(`
--- (9) ---`);

(async () => {
    console.log(3)
    return
})();

//--- (10) Object, Default and Array as parameters with Spread syntax
console.log(`
--- (10) ---`);

function f7({ a, b }, c = 3, ...rest) {
    console.log(a);
    console.log(b);
    console.log(c);
    for (let one of rest) {
        console.log(one);
    }
    return a * b * c;
}

console.log(f7(obj, null, 4, 5, 6, 7))

//--- (11) pass obj as parameters
console.log(`
--- (11) ---`);

console.log(f7(obj, '', 4, 5, 6, 7))
console.log(f7(obj))

//--- (12) number of parameters
console.log(`
--- (12) ---`);

function f8(a, b, c) {
    console.log(arguments[0]); //a
    console.log(arguments[1]); //b
    console.log(arguments[2]); //c
    return a + b + c;
}

console.log(f8('a', 'b', 'c'))

//-- (13) Invoking a Function with a Function Constructor
console.log(`
--- (13) ---`);

const f10 = new f8(2, 3, 4)
console.log(f10)

//--- (14) callback function on map
console.log(`
--- (14) ---`);

const f9 = ['x', 'xx', 'xxx', 'xxxx'];
console.log(f9.map((x) => x.length)); //arrow syntax as parameters

//--- (15) Function Borrowing https://www.w3schools.com/JS/js_function_bind.asp
//With the bind() method, an object can borrow a method from another object.
console.log(`
--- (15) ---`);

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

console.log(fullName)

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

//--- (16) Call() //https://www.w3schools.com/JS/js_function_call.asp
console.log(`
--- (16) ---`);

console.log(person.fullName.call(member))

//--- (17) Call with parameters
console.log(`
--- (17) ---`);

const person2 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

console.log(person2.fullName.call(member, "Oslo", "Norway"));

//--- (18) apply()
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.
console.log(`
--- (18) ---`);

console.log(person2.fullName.call(member, ["Oslo", "Norway"]));

//--- (19) apply can used for calculate Max Method on Arrays
console.log(`
--- (19) ---`);

console.log(Math.max.apply(null, [1, 2, 3]));
console.log(Math.max.apply(Math, [1, 2, 3]));
console.log(Math.max.apply('', [1, 2, 3]));


//--(20)  Nested Functions and colsure, see more in Closure
console.log(`
--- (20) ---`);

function add() {
    let counter = 0;
    function plus() { counter += 1; }
    plus();
    return counter;
}
console.log(add(), add(), add());

//--- (21) closure on self-invoking functions (arrow function working in global context)
console.log(`
--- (21) ---`);

const Add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();


console.log(Add(), Add(), Add())

//--- (22) This point to global context in arrow function
console.log(`
--- (22) ---`);

const selfInvoking = (function () {
    let counter = 0;
    console.log(counter, this)
    return function () { counter += 1; return counter }
})();

console.log(Add(), Add(), Add())


//--- (23) Using call() and apply(), you can pass the value of this as if it's an explicit parameter.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
console.log(`
 --- (23) ---`);

function add(c, d) {
    return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// The first argument is bound to the implicit 'this' parameter; the remaining
// arguments are bound to the named parameters.
console.log(add.call(o, 5, 7)); // 16

// The first argument is bound to the implicit 'this' parameter; the second
// argument is an array whose members are bound to the named parameters.
console.log(add.apply(o, [10, 20])); // 34


//--- (24) f.bind(someObject) creates a new function with the same body and scope as f,
console.log(`
 --- (24) ---`);

function f() {
    return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind only works once!
console.log(h()); // azerty

const o1 = { a: 37, f, g, h };
console.log(o1.a, o1.f(), o1.g(), o1.h()); // 37 37 azerty azerty

//--- (25) arrow
console.log(`
  --- (25) ---`);

const obj3 = {
    getThisGetter() {
        const getter = () => this;
        return getter;
    },
};

const fn1 = obj3.getThisGetter();
console.log(fn1() === obj3); // true

const fn2 = obj3.getThisGetter;
console.log(fn2()() === globalThis); // true in non-strict mode

//--- (26) function can apply to any array elements
console.log(`
  --- (26) ---`);

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
function applyForEach(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

console.log(applyForEach(factorial, [2, 3, 4]))

//--- (27) Nested functions and closures
console.log(`
 --- (27) ---`);

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5));    // 8

console.log(outside(4)(5));  // 9

//--- (28) Name conflict in Closure
console.log(`
 --- (28) ---`);

function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

console.log(outside()(10)); // 20 (instead of 10)


//--- (29)  array-like object, but this is not array!
console.log(`
 --- (29) ---`);

function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
console.log(myConcat(", ", "red", "orange", "blue"));

//--- (30) Rest parameters
console.log(`
 --- (30) ---`);

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

