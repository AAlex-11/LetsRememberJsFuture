// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

//--- (1) Every Symbol() call is guaranteed to return a unique Symbol.
console.log(`
--- (1) ---`)

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(Symbol("foo") === Symbol("foo") );

//--- (2) Symbol wrapper object,
console.log(`
--- (2) ---`)

const sym = Symbol("foo");
console.log(typeof sym); 
const symObj = Object(sym);
console.log(typeof symObj); 

//--- (3) Symbol.for(tokenString) takes a string key and returns a symbol value from the registry, while Symbol.keyFor(symbolValue) takes a symbol value and returns the string key corresponding to it.
console.log(`
--- (3) ---`)

console.log(Symbol.keyFor(Symbol.for("tokenString")) === "tokenString")

//--- (4) typeof operator with Symbols
console.log(`
--- (4) ---`)

console.log(typeof Symbol() === "symbol")
console.log(typeof Symbol("foo") === "symbol")
console.log(typeof Symbol.iterator === "symbol")

//--- (5) Symbols and for...in iteration
console.log(`
--- (5) ---`)

const obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (const i in obj) {
  console.log(i);
}

//--- (6) Symbols and JSON.stringify()
console.log(`
--- (6) ---`)

console.log(JSON.stringify({ [Symbol("foo")]: "foo" }))

//--- (7) Symbol wrapper objects as property keys
console.log(`
--- (7) ---`)

const sym4= Symbol("foo");
const obj1 = { [sym4]: 1 };
console.log(obj1[sym4]); // 1
console.log(obj1[Object(sym4)]); // still 1
