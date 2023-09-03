//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

//--- (1) what is iterator
console.log(`
--- (1) ---`)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys()
console.log(keys)

for (let x of keys) {
    console.log(x)
  }

//--- (2) Transforming a Javascript iterable into an array
console.log(`
--- (2) ---`)

console.log(fruits.entries())

let arr = Array.from(fruits.entries());
console.log(arr)

//--- (3) iterable iterator
console.log(`
--- (3) ---`)

const myObj = {};

const x = new WeakSet(
    (function* () {
        yield {};
        yield myObj;
        yield {};
    })(),
);

console.log(x.has(myObj));

//--- (4) For
console.log(`
--- (4) ---`)

for (const value of ["a", "b", "c"]) {
    console.log(value);
}

//--- (5) array and parameters spreading
console.log(`
--- (5) ---`)

const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    },
};

console.log([...myIterable]);

//--- (6)
console.log(`
--- (6) ---`)

console.log([..."abc"])

//--- (7)
console.log(`
--- (7) ---`)

function* gen() {
    yield* ["a", "b", "c"];
}

console.log(gen().next());

//--- (8)
console.log(`
--- (8) ---`)

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a);

//--- (9) User-defined iterables
console.log(`
--- (9) ---`)

const obj = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                i++;
                console.log("Returning", i);
                if (i === 3) return { done: true, value: i };
                return { done: false, value: i };
            },
            return() {
                console.log("Closing");
                return { done: true };
            },
        };
    },
};

const [d] = obj;
console.log(d);

//--- (10) array, map
console.log(`
--- (10) ---`)

const [e, f, g] = obj;
console.log([e, f, g]);
[e, f, g].map((x) => console.log(x))

//--- (11) for
console.log(`
--- (11) ---`)

for (const d of obj) {
    break;
}

//--- (12) Iterators are stateful 
console.log(`
--- (12) ---`)

function makeIterator(array) {
    let nextIndex = 0;
    return {
        next() {
            return nextIndex < array.length
                ? {
                    value: array[nextIndex++],
                    done: false,
                }
                : {
                    done: true,
                };
        },
    };
}

const it = makeIterator(["a", "b"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);

//--- (13) Defining an iterable with a class
console.log(`
--- (13) ---`)

class SimpleClass {
    #data;

    constructor(data) {
        this.#data = data;
    }

    [Symbol.iterator]() {
        // Use a new index for each iterator. This makes multiple
        // iterations over the iterable safe for non-trivial cases,
        // such as use of break or nested looping over the same iterable.
        let index = 0;

        return {
            // Note: using an arrow function allows `this` to point to the
            // one of `[@@iterator]()` instead of `next()`
            next: () => {
                if (index < this.#data.length) {
                    return { value: this.#data[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
    console.log(val);
}

//--- (14) You can redefine the iteration behavior by supplying our own @@iterator
console.log(`
--- (14) ---`)

// need to construct a String object explicitly to avoid auto-boxing
const someString = "hi";

console.log(typeof someString[Symbol.iterator]);

const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//--- (15) see more in AsyncGenerator

//--- (16) see more in ArrayLoop
