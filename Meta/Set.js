//https://www.w3schools.com/JS/js_object_sets.asp

//--- (1) a JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
console.log(`
 --- (1) ---`);

const letters = new Set(["a", "b", "c"]);
console.log(letters)

console.log(`
 --- (2) ---`);

letters.add("a");
letters.add("d");

console.log(letters)

//--- (3) set from string
console.log(`
 --- (3) ---`);
console.log(new Set("firefox"));


console.log(`
 --- (4) ---`);

let text = "";
letters.forEach(function (value) {
    text += value;
})

console.log(text)

console.log(`
 --- (5) ---`);

const myIterator = letters.values();
console.log(myIterator)

console.log(`
 --- (6) ---`);

console.log(letters.keys())

//--- (7) A Set has no keys, entries() returns [value,value] pairs instead of [key,value] pairs.
console.log(`
 --- (7) ---`);

console.log(letters.entries())

//Sets are Objects
console.log(`
 --- (8) ---`);

console.log(typeof letters, letters instanceof Set)

//--- (9) Iterating sets https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
console.log(`
 --- (9) ---`);

const mySet1 = new Set();
mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
const o = { a: 1, b: 2 };
mySet1.add(o);
mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

for (const item of mySet1) {
    console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

//--- (10) Keys, Value, entries
console.log(`
 --- (10) ---`);

for (const item of mySet1.keys()) {
    console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
    console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// key and value are the same here
for (const [key, value] of mySet1.entries()) {
    console.log(key);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

//--- (11) Convert Set object to an Array object, with Array.from
console.log(`
 --- (11) ---`);

const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]
console.log(myArr)

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

//--- (12) Iteration
console.log(`
 --- (12) ---`);

// intersect can be simulated via
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// difference can be simulated via
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// Iterate set entries with forEach()
mySet2.forEach((value) => {
    console.log(value);
});

//--- (13) Use to remove duplicate elements from an array
console.log(`
 --- (13) ---`);

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]);


// the following will also work if run in an HTML document
//mySet1.add(document.body);
//mySet1.has(document.querySelector("body")); // true
