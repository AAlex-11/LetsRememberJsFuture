//https://nodejs.org/api/async_hooks.html

//--- (1) it async function return simple value, that value will wrap to Promise
async function f1() {
    return '1'
}

async function f2() {
    return new Promise((resolve, reject) => {
        resolve(setTimeout(resolve('OK'), 1000))
    })
}

//--- (2) any Asyc function return Promise,
console.log(1, f1(), f2())

//--- (3) uwait result with then
f2().then(val => console.log(2, val));

//--- (4) top-level await wit IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(async function () {
    console.log(3, await f2())
}
)();

//--- (5) parallel executing

async function f3() {
    return new Promise((resolve, reject) => {
        resolve(setTimeout(resolve('KO'), 1000))
    })
}

(async function () {
    const [a, b] = [await f2(), await f3()]
    console.log(4, a, b)
}
)();