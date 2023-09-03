//https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript

const arr = [1, 2, 3]

//---(1) encient stype
console.log(`
--- (1) ---`)

for (let index = 0; index < arr.length; ++index) {
    console.log(arr[index]);
}

//---(2) for
console.log(`
--- (2) ---`)

for (const x of arr) {
    console.log(x)
}

//---(3) forEach
console.log(`
--- (3) ---`)

arr.forEach(x => {
    console.log(x)
});

//---(4) for in 
console.log(`
--- (4) ---`)

// `a` is a sparse array

const a = [];
a[0] = "1";
a[10] = "2";
a[10000] = "3";
for (const name in a) {
    if (Object.hasOwn(a, name) &&       // These checks are
        /^0$|^[1-9]\d*$/.test(name) &&  // explained on
        name <= 4294967294              // https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
    ) {
        const element = a[name];
        console.log(a[name]);
    }
}

//---(5) for iterator 
console.log(`
--- (5) ---`)

const it = arr.values(); // Or `const it = a[Symbol.iterator]();` if you like
let entry;
while (!(entry = it.next()).done) {
    console.log(entry.value);
}

//--- 6 map
console.log(`
--- (6) ---`)

a.map((v,i)=>{
    console.log(i,v)
})

//--- (7) array-like objects 
console.log(`
--- (7) ---`)

//Aside from true arrays, there are also array-like objects that have a length property and properties with all-digits names: 
//NodeList instances, HTMLCollection instances, the arguments object, etc.

const HTML = require('html-element');
const doc = `<body>
</body>`;
console.log(doc)
const page = HTML.document.createElement(doc)
page.appendChild('<div>1</div>')
page.appendChild('<div>2</div>')
page.appendChild('<div>3</div>')
console.log(page)

//--- (8) use for-of with host-provided array-like objects 
console.log(`
--- (8) ---`)

const divs = page.childNodes
for (const div of divs) {
    console.log(div)
}

//--- (9) use Array.prototype functions with host-provided array-like objects 
console.log(`
--- (9) ---`)

Array.prototype.forEach.call(page.childNodes, (x) => {
    console.log(x)
});

//--- (10) Create a true array
console.log(`
--- (10) ---`)

const arr1 = Array.from(page.childNodes)
console.log(arr1)

//--- (11) Use spread syntax (...)
console.log(`
--- (11) ---`)

const arr2 = [...page.childNodes];
console.log(arr2)

//--- (12) Use the slice method of arrays
console.log(`
--- (12) ---`)

const arr3 = Array.prototype.slice.call(page.childNodes);
console.log(arr3)



