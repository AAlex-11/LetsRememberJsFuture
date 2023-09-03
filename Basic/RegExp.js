//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions


//--- (1) Matching duplicate words
console.log(`
--- (1) ---`)

function findDuplicates(text) {
    return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

console.log(findDuplicates("foo foo bar")); // 'foo'
console.log(findDuplicates("foo bar foo")); // undefined
console.log(findDuplicates("Hello hello")); // 'Hello'
console.log(findDuplicates("Hello hellos")); // undefined
