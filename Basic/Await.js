//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

//--- (1) The for await...of statement creates a loop iterating over async iterable objects as well as sync iterables. 
console.log(`
--- (1) ---`);

async function* foo() {
    yield 31;
    yield 32;
}

(async function () {
    for await (const num of foo()) {
        console.log(1, num);   // Expected output: 1
        break; // Closes iterator, triggers return
    }
})();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.
//--- (2) Thenables
console.log(`
--- (2) ---`);

const aThenable = {
    then(onFulfilled, onRejected) {
        onFulfilled({
            // The thenable is fulfilled with another thenable
            then(onFulfilled, onRejected) {
                onFulfilled(42);
            },
        });
    },
};
(async () => {
    console.log(2, await Promise.resolve(aThenable))// A promise fulfilled with 42
})();

//--- (3) see more in Promise/Await 



