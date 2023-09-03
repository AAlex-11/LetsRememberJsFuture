//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
// logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).
console.log(`
--- (1) ---`)

const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//--- (2) Optional chaining
console.log(`
--- (2) ---`)

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
  // Expected output: undefined
