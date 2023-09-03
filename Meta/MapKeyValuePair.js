//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

//--- (1) Map is KeyValue
console.log(`
--- (1) ---`)

var myMap = new Map();

myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

console.log(myMap.get('a'));

myMap.set('a', 97);

console.log(myMap.get('a'));

console.log(myMap.size);

myMap.delete('b');

console.log(myMap.size);

//--- (2) Map Object
console.log(`
--- (2) ---`)

const keyString = "a string";
const keyObj = {};
const keyFunc = function () { };

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () { })); // undefined, because keyFunc !== function () {}

//--- (3) NaN
console.log(`
--- (3) ---`)

myMap.set(NaN, "not a number");

console.log(myMap.get(NaN));

const otherNaN = Number("foo");
console.log(myMap.get(otherNaN));

//--- (4) Iteratong with For
console.log(`
--- (4) ---`)

myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

//--- (5) iteration wir ForEach
console.log(`
--- (5) ---`)

myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});

//--- (7) Relation with Array objects
console.log(`
--- (7) ---`)

const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]

//--- (8) Map can clone
console.log(`
--- (8) ---`)

const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)

//--- (9) Map can Merge
console.log(`
--- (9) ---`)

const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);

const second = new Map([
    [1, "uno"],
    [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
var merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

//--- (10) Map can megre with array
console.log(`
--- (10) ---`)

merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three


//https://www.w3schools.com/JS/js_object_maps.asp
//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.
//A Map has a property that represents the size of the map.

//--- (11) create
console.log(`
 --- (11) ---`);
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits)  

//--- (12) add
console.log(`
 --- (12) ---`);
fruits.set ('lemon', 400)
fruits.set ('lemson', 600)
console.log(fruits) 

//--- (13) Being able to use objects as keys is an important Map feature.
console.log(`
 --- (13) ---`);

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits) 

console.log(`
 --- (14) ---`);

let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log(total) 

//--- (15) Keys
console.log(`
 --- (15) ---`);

let text = "";
for (const x of fruits.keys()) {
  text += x;
}
console.log(text)