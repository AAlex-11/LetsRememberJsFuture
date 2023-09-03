
let X = require('./SimplePropertyRetriever.js');

//--- (1) Node.js global objects https://nodejs.org/api/globals.html#global
console.log(`
--- (1) ---`)

const arr1 = []
console.log(X.SimplePropertyRetriever.getOwnNonenumerables(globalThis).forEach((value, prop) => { arr1.push(value)}));
arr1.sort().forEach((v, i) => console.log(i, v))

console.log(`
--- (2) ---`)
const arr2 = []
console.log(X.SimplePropertyRetriever.getOwnEnumerables(globalThis).forEach((value, prop) => { arr2.push(value) }));
arr2.sort().forEach((v, i) => console.log(i, v))

console.log(`
--- (3) ---`)
const arr3 = []
console.log(X.SimplePropertyRetriever.getPrototypeNonenumerables(globalThis).forEach((value, prop) => { arr3.push(value)  }));
arr3.sort().forEach((v, i) => console.log(i, v))

console.log(`
--- (4) ---`)
const arr4 = []
console.log(SimplePropertyRetriever.getPrototypeEnumerables(globalThis).forEach((value, prop) => { arr4.push(value)  }));
arr4.sort().forEach((v, i) => console.log(i, v))


