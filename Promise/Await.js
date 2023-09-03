//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

//--- (1) Awaiting a promise to be fulfilled
console.log(`
--- (1) ---`)

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

f1();

//--- (2) Thenable objects are resolved just the same as actual Promise objects.
console.log(`
--- (2) ---`)

async function f() {
    const thenable = {
        then(resolve, _reject) {
            resolve("resolved!");
        },
    };
    console.log(await thenable); // "resolved!"
}

f();

//--- (3) Thenable objects can also be rejected:
console.log(`
--- (3) ---`)

async function f4() {
    //Handling rejected promises
    try {
        const z = await Promise.reject(30);
    } catch (e) {
        console.error(e); // 30
    }
}

f4();

//--- (4) demonstrate how the microtask queue is processed when each await expression is encountered.
console.log(`
--- (4) ---`)

let i = 0;

queueMicrotask(function test() {
    i++;
    console.log("microtask", i);
    if (i < 3) {
        queueMicrotask(test);
    }
});

(async () => {
    console.log("async function start");
    for (let i = 1; i < 3; i++) {
        await null;
        console.log("async function resume", i);
    }
    await null;
    console.log("async function end");
})();

queueMicrotask(() => {
    console.log("queueMicrotask() after calling async function");
});

console.log("script sync part end");

// Logs:
// async function start
// script sync part end
// microtask 1
// async function resume 1
// queueMicrotask() after calling async function
// microtask 2
// async function resume 2
// microtask 3
// async function end

console.log('end')