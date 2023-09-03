// https://www.w3schools.com/js/js_array_methods.asp

//--- (1) length
console.log(`
--- (1) ---`)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)

//--- (2) removes the last element from an array
console.log(`
--- (2) ---`)

let fruit = fruits.pop();
console.log(fruits)
console.log(fruit)

//---  (3) adds a new element at the end of array
console.log(`
--- (3) ---`)

fruits.push("Mango");
console.log(fruits)

//--- (4) removes the first array element
console.log(`
--- (4) ---`)

fruits.shift();
console.log(fruits)

//--- (5) adds a new element at the beginning of array
console.log(`
--- (5) ---`)

fruits.unshift("Lemon");
console.log(fruits)

//--- (6) Changing Elements
console.log(`
--- (6) ---`)

fruits[0] = "Kiwi";
console.log(fruits)

//--- (7) changing from iterating
console.log(`
--- (7) ---`)

const arr5 = Array.from({ length: 10 }, (v, k) => k + 1);
arr5.forEach((v, i, arr) => { arr[i] = arr[i] + 20 })
console.log(arr5)

//--- (8) make element undefined
console.log(`
--- (8) ----`)

delete fruits[1];
console.log(fruits)

fruits[1] = "Lemon";
console.log(fruits)

//--- (9) concat array
console.log(`
--- (9) ---`)

const names = ["Cecilie", "Lone"];
const mix = fruits.concat(names)
console.log(mix)

//--- (10) Merging an Array with Values
console.log(`
--- (10) ---`)

const newmix = mix.concat('John')
console.log(newmix)

//--- (11) Flattening an array is the process of reducing the dimensionality of an array
console.log(`
--- (11) --- `)

const myArr = [['Kiwi', 'Lemon'], ['Mango'], names];
console.log(myArr)

const newArr = myArr.flat()
console.log(newArr)

//--- (12) used to add new items, The first parameter (2) defines the position where new elements should be added, The second parameter (0) defines how many elements should be removed.
console.log(`
--- (12) ---`)

newArr.splice(2, 0, 'Orange', 'Apple')
console.log(newArr)

//--- (13) Using splice() to Remove Elements
console.log(`
--- (13) ---`)

newArr.splice(0, 1);
console.log(newArr)

//--- (14) slices out a piece of an array into a new array.
console.log(`
--- (14) ---`)

const arr2 = newArr.slice(1)
console.log(arr2)

const arr3 = arr2.slice(1, 3)
console.log(arr3)

//--- (15) toString()
console.log(`
--- (14) ---`)

console.log(arr3.toString())

//--- (16) sort
console.log(`
--- (16) ---`)

const arr4 = arr3.sort()
console.log(arr4)

//--- (17) New
console.log(`
--- (17) ---`)

const cars = new Array("Saab", "Volvo", "BMW")
console.log(cars)

//--- (18) Arrays are a special type of objects
console.log(`
--- (18) ---`)

console.log(typeof cars)

//--- (19) foreach
console.log(`
--- (19) ---`)

fruits.forEach((x) => {
    console.log(x)
})

//--- (20) map  
console.log(`
--- (20) ---`)

fruits.map((x) => {
    console.log(x)
})

//--- (21) keys
console.log(`
--- (21) ---`)

const keys = fruits.keys()
console.log(keys)

//--- (22) iteration for keys
console.log(`
--- (22) ---`)

for (let x of keys) {
    console.log(x)
}

//---(23) array from
console.log(`
--- (23) ---`)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

console.log(Array.from('foo'));

console.log(Array.from([1, 2, 3], (x) => x + x));

//--- (24) Transforming a Javascript iterable into an array
console.log(`
--- (24) ---`)

console.log(fruits.entries())

let arr = Array.from(fruits.entries());
console.log(arr)

//--- (25) implicit string converstion
console.log(`
--- (25) ---`)

console.log(fruits["2"] !== fruits["02"]);

//--- (26) changing each array item
console.log(`
--- (26) ---`)

const a = Array.from({ length: 20 }, (v, k) => k + 1);
a.forEach((v, i, arr) => { arr[i] = arr[i] + 20 })
console.log(a)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//--- (27) Array methods are always generic 
console.log(`
--- (27) ---`)

const arr6 = {
    0: "a",
    1: "b",
    length: 2,
};
console.log(Array.prototype.join.call(arr6, "+"));

//--- (28) length property, length always ends as an integer
console.log(`
--- (28) ---`)

console.log(Array.prototype.flat.call({})); // []

const b = { length: 0.7 };
Array.prototype.push.call(b);
console.log(b.length);

//--- (29) Create a string from an array
console.log(`
--- (29) ---`)

console.log(fruits.join(", "));

//--- (30) Find the index of an item in an array
console.log(`
--- (30) ---`)

console.log(fruits.indexOf("Apple"))

//-- (31) Check if an array contains a certain item
console.log(`
--- (31) ---`)

console.log(fruits.includes("Apple"));
console.log(fruits.indexOf("Apple") !== -1);

//--- (32) Remove multiple items from the end of an array
console.log(`
--- (32) ---`)

const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
console.log(removedItems);

//--- (33) Truncate an array down to just its first N items
console.log(`
--- (33) ---`)

const trunc = arr5.splice(5)
console.log(arr5)
console.log(trunc)

//--- (34) Remove the first item from an array
console.log(`
--- (34) ---`)

const rem = trunc.shift()
console.log(trunc)
console.log(rem)

//--- (35)  Remove multiple items from the beginning of an array
console.log(`
--- (35) ---`)

const s = 0;
const del = 3;
const mults = trunc.splice(s, del);
console.log(trunc)
console.log(mults)

//--- (36) Add a new first item to an array
console.log(`
--- (36) ---`)

const newLen = trunc.unshift("a")
console.log(trunc, newLen)

//--- (37) concat
console.log(`
--- (37) ---`)

console.log(fruits.concat(arr5))


//--- (38) jagged 
console.log(`
--- (38) ---`)

let arr7 = fruits.push({ p: 1, q: 2 })
console.log(fruits)

var jagged = [[22, 10], [10, 13, 15, 14], fruits];
console.log(jagged)

//--- (39) three way copy
console.log(`
--- (39) ---`)

const cp1 = [...jagged]
const cp2 = Array.from(cp1)
const cp3 = cp2.slice()

console.log(cp1)
console.log(cp2)
console.log(cp3)

//--- (40) deep copy
console.log(`
--- (40) ---`)

console.log(JSON.parse(JSON.stringify(jagged)))

//--- (41) print two-dimensional array
console.log(`
--- (41) ---`)

const board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));



