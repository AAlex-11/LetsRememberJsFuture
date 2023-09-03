//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//--- (1) Numbers
console.log(`
 --- (1) ---`);

console.log(typeof 37 === "number");
console.log(typeof 3.14 === "number");
console.log(typeof 42 === "number");
console.log(typeof Math.LN2 === "number");
console.log(typeof Infinity === "number");
console.log(typeof NaN === "number"); // Despite being "Not-A-Number"
console.log(typeof Number("1") === "number"); // Number tries to parse things into numbers
console.log(typeof Number("shoe") === "number"); // including values that cannot be type coerced to a number

//--- (2) bigint
console.log(`
 --- (2) ---`);

console.log(typeof 42n === "bigint");

//--- (3) Strings
console.log(`
 --- (3) ---`);

console.log(typeof "" === "string");
console.log(typeof "bla" === "string");
console.log(typeof `template literal` === "string");
console.log(typeof "1" === "string"); // note that a number within a string is still typeof string
console.log(typeof typeof 1 === "string"); // typeof always returns a string
console.log(typeof String(1) === "string"); // String converts anything into a string, safer than toString

//--- (4) Booleans
console.log(`
 --- (4) ---`);

console.log(typeof true === "boolean");
console.log(typeof false === "boolean");
console.log(typeof Boolean(1) === "boolean"); // Boolean() will convert values based on if they're truthy or falsy
console.log(typeof !!1 === "boolean"); // two calls of the ! (logical NOT) operator are equivalent to Boolean()

//--- (5) Symbols
console.log(`
 --- (5) ---`);

console.log(typeof Symbol() === "symbol");
console.log(typeof Symbol("foo") === "symbol");
console.log(typeof Symbol.iterator === "symbol");

//--- (6) Undefined
console.log(`
 --- (6) ---`);

console.log(typeof undefined === "undefined");
console.log(typeof declaredButUndefinedVariable === "undefined");
console.log(typeof undeclaredVariable === "undefined");

//--- (7) Objects
console.log(`
 --- (7) ---`);

console.log(typeof { a: 1 } === "object");

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
console.log(typeof [1, 2, 4] === "object");

console.log(typeof new Date() === "object");
console.log(typeof /regex/ === "object");

// The following are confusing, dangerous, and wasteful. Avoid them.
console.log(typeof new Boolean(true) === "object");
console.log(typeof new Number(1) === "object");
console.log(typeof new String("abc") === "object");

//--- (8) Functions
console.log(`
 --- (8) ---`);

console.log(typeof function () { } === "function");
console.log(typeof class C { } === "function");
console.log(typeof Math.sin === "function");
