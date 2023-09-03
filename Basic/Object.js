// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

console.log(`
--- (1) ---`)

const obj = {
    foo: 1,
    // You should not define such a method on your own object,
    // but you may not be able to prevent it from happening if
    // you are receiving the object from external input
    propertyIsEnumerable() {
        return false;
    },
};

console.log(obj.propertyIsEnumerable("foo"));
console.log(Object.prototype.propertyIsEnumerable.call(obj, "foo"));

//--- (2) create object from NULL prototype
console.log(`
--- (2) ---`)

const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
try {
    console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value
} catch (e) {
    console.log(e.message + '\n' + e.stack)
}

console.log(normalObj.valueOf());
try {
    nullProtoObj.valueOf();
} catch (e) {
    console.log(e.message + '\n' + e.stack)
}

console.log(normalObj.hasOwnProperty("p"));
try {
    nullProtoObj.hasOwnProperty("p");
} catch (e) {
    console.log(e.message + '\n' + e.stack)
}

console.log(normalObj.constructor);
console.log(nullProtoObj.constructor);

nullProtoObj.toString = Object.prototype.toString;

console.log(nullProtoObj.toString());
console.log(`nullProtoObj is: ${nullProtoObj}`);

//--- (3) creating from NULL prototype can be interesting, this function working wrong
console.log(`
--- (3) ---`)

let ages = { alice: 18, bob: 27 };

function hasPerson(name) {
    return name in ages;
}

function getAge(name) {
    return ages[name];
}

console.log(hasPerson("hasOwnProperty"));
console.log(getAge("toString"));

//--- (4) but this working correctly
console.log(`
--- (4) ---`)

ages = Object.create(null, {
    alice: { value: 18, enumerable: true },
    bob: { value: 27, enumerable: true },
});

console.log(hasPerson("hasOwnProperty"));
console.log(getAge("toString"));

//--- (5) Making your object not inherit from Object.prototype also prevents prototype pollution attacks. 
console.log(`
--- (5) ---`)

const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
    // access confidential data
}

//--- (6) Constructing empty objects
console.log(`
--- (6) ---`)

const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);

//--- (7) create Boolean objects
console.log(`
--- (7) ---`)

let o = new Object(true);
o = new Object(Boolean()); // the same declaration

//--- (8) Modifying the object prototype property 
console.log(`
--- (8) ---`)

const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function (...args) {
    if (Object.hasOwn(this, "-prop-value")) {
        return this["-prop-value"];
    } else {
        // It doesn't look like one of my objects, so let's fall back on
        // the default behavior by reproducing the current behavior as best we can.
        // The apply behaves like "super" in some other languages.
        // Even though valueOf() doesn't take arguments, some other hook may.
        return current.apply(this, args);
    }
};

//--- (9) get keys and value
console.log(`
--- (9) ---`)

var obj2 = [{
    "1": "one"
}, {
    "2": "two"
}]
obj2.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        console.log("key:" + key + "value:" + item[key]);
    });
});


//--- (10) JSON Indented format
console.log(`
--- (10) ---`)

var jsObj =
{
    abc: "hello",
    bca: "allo",
    cab: "dd:cc",
    d: ["hello", "llo", "dd:cc"],
    e: { abc: "hello", bca: "allo", cab: "dd:cc" }
};

function format(obj) {
    var str = JSON.stringify(obj, 0, 4),
        arr = str.match(/".*?":/g);

    for (var i = 0; i < arr.length; i++)
        str = str.replace(arr[i], arr[i].replace(/"/g, ''));

    return str;
}

console.log(format(jsObj));


//--- (11) Detecting an undefined object property
console.log(`
--- (11 ) ---`)

console.log(jsObj.e === undefined)
console.log(jsObj.f === undefined)

console.log(!jsObj.hasOwnProperty('e'))
console.log(!jsObj.hasOwnProperty('f'))

//--- (12) object methods
//https://www.w3schools.com/JS/js_object_es5.asp
console.log(`
--- (12 ) ---`)

// Create object with an existing object as prototype
const j1 = Object.create(jsObj)
console.log('j1', j1)

// Adding or changing an object property
const j2 = Object.defineProperty(jsObj, "sum", {
    enumerable: true,
    configurable: true,
}, 'description');
console.log('j2', j2)

// Adding or changing object properties
const j3 = Object.defineProperties(jsObj, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {},
});
console.log('j3', j3)

// Accessing Properties
const j4 = Object.getOwnPropertyDescriptor(jsObj, "sum")
console.log('j4', j4)

// Returns all properties as array
const j5 = Object.getOwnPropertyNames(jsObj)
console.log('j5', j5)

// Accessing the prototype
const j6 = Object.getPrototypeOf(jsObj)
console.log('j6', j6)

// Returns enumerable properties as an array
const j7 = Object.keys(jsObj)
console.log('j7', j7)

//--- (13) protection object
//https://www.w3schools.com/JS/js_object_es5.asp
console.log(`
--- (13 ) ---`)

// Prevents adding properties to an object
console.log(Object.preventExtensions(jsObj))

// Returns true if properties can be added to an object
console.log(Object.isExtensible(jsObj))

// Prevents changes of object properties (not values)
console.log(Object.seal(jsObj))

// Returns true if object is sealed
console.log(Object.isSealed(jsObj))

// Prevents any changes to an object
console.log(Object.freeze(jsObj))

// Returns true if object is frozen
console.log(Object.isFrozen(jsObj))

