//https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

//--- object is a copy whose properties share the same references

const one = ["noodles", { list: ["eggs", "flour", "water"] }];

const two = Array.from(one);
console.log(two);

two[1].list = ["rice", "water"];

console.log(one);
