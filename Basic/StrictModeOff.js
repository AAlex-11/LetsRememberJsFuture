//https://www.w3schools.com/js/js_strict.asp


// This will cause an error because a is not declared
console.log(`
--- (1) ---`)

a = "Hello World";
console.log(a);


//--- (2) This, Only for demonstration — you should not mutate built-in prototypes
console.log(`
--- (2) ---`)

function getThis() {
    return this;
}


Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true


//--- (3) compare with This.js - currently false, woth strint mode all of that return true
console.log(`
--- (3) ---`)

function fun() {
    return this;
}
console.log(fun() === undefined);
console.log(fun.call(2) === 2);
console.log(fun.apply(null) === null);
console.log(fun.call(undefined) === undefined);
console.log(fun.bind(true)() === true);

//--- (4) function local scope (only the code inside the function is in strict mode):
console.log(`
 --- (4) ---`)

x = 3.14;       // This will not cause an error.
try {
    myFunction();
} catch (error) {
    console.log(error)
}

function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
}

//--- (5) Deleting a variable (or object) is not allowed in strict mode
console.log(`
--- (5) ---`)

y = { p1: 10, p2: 20 };
delete y;
try {
    console.log(y)
} catch (error) {
    console.log(error)
}

//--- (6) Octal numeric literals are not allowed in strict mode
console.log(`
--- (6) ---`)

let z = 010;
console.log(z)

//--- (7) Octal escape characters are not allowed in strict mode
console.log(`
--- (7) ---`)

let b = "\041";
console.log(b)

//--- (8) Writing to a read-only property is not allowed in strict mode
console.log(`
--- (8) ---`)

const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14;
console.log(obj, obj.x)

//--- (9) get-only property is not allowed in strict mode
console.log(`
--- (9) ---`)

const obj1 = { get x() { return 0 } };
obj1.x = 3.14;
console.log(obj1, obj1.x)

//--- (10) Deleting an undeletable property is not allowed in strict mode
console.log(`
--- (10) ---`)

delete Object.prototype;
const obj2 = {}
console.log(Object.getPrototypeOf(obj2))


//--- (11) eval, arguments, implements, interface, let, package, private, protected, public, static, yield -  can not use as identifier in strict mode
console.log(`
--- (11) ---`)

const [arguments] = [1, 2, 3]
console.log([arguments])

//--- (12) The with statement is not allowed in strict mode
console.log(`
--- (12) ---`)

with (Math) { d = cos(2) };
console.log(d)

//--- (13) variable can not be used before it is declared in strict mode
console.log(`
--- (13) ---`)

eval("e = 2");
console.log(e);

//--- (14) eval() can not declare a variable in strict mode
console.log(`
--- (14) ---`)

eval("var f=3;");
console.log(f);

