//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

//--- (1) escape a backtick and dollar
console.log(`
--- (1) ---`)

console.log(`\`` === "`"); // true
console.log(`\${1}` === "${1}") // true

//--- (2) Use backtick to create multiline string
console.log(`
--- (2) ---`)

console.log("string text line 1\n" + "string text line 2");
console.log(`string text line 1
string text line 2`);

//--- (3) String interpolation
console.log(`
--- (3) ---`)

const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

//--- (4) Nesting templates
console.log(`
--- (4) ---`)

const isLargeScreen = () => ""
class item {
    get isCollapsed() {
        return "expander"
    }
}
const classes = `header 
        ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
    }`;

//--- (5) Tagged templates
console.log(`
--- (5) ---`)

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That "
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = ageExp > 99 ? "centenarian" : "youngster";

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.

//--- (6) The tag does not have to be a plain identifier. 
console.log(`
--- (6) ---`)

console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
    console.log(strings, values);
    return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []

//--- (7)  Tag functions don't even need to return a string
console.log(`
--- (7) ---`)

function template(strings, ...keys) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
console.log(t1Closure("Y", "A")); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
console.log(t2Closure("Hello", { foo: "World" })); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
console.log(t3Closure("foo", { name: "MDN", age: 30 })); // "I'm MDN. I'm almost 30 years old."
console.log(t3Closure({ name: "MDN", age: 30 })); // "I'm MDN. I'm almost 30 years old."


//--- (8) For any particular tagged template literal expression, the tag function will always be called with the exact same literal array, no matter how many times the literal is evaluated.
console.log(`
--- (8) ---`)

const callHistory = [];

function tag(strings, ...values) {
    callHistory.push(strings);
    // Return a freshly made object
    return {};
}

function evaluateLiteral() {
    return tag`Hello, ${"world"}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array


//--- 9 Raw strings allows without processing escape sequences.
console.log(`
--- (9) ---`)

function tag(strings) {
    console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// Logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

//--- (10)
console.log(`
--- (10) ---`)

const str = String.raw`Hi\n${2 + 3}!`;  // "Hi\\n5!"
str.length; // 6

console.log(Array.from(str).join(","))
// "H,i,\\,n,5,!"

//--- (11) passes literal array to String.raw
console.log(`
--- (11) ---`)

const identity = (strings, ...values) =>
    String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!

//--- (12) format this literal's content as HTML
console.log(`
--- (12) ---`)

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
const doc = html`<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;
console.log(doc)

//--- (13) Tagged templates and escape sequences
console.log(`
--- (13) ---`)


function latex(str) {
    return { cooked: str[0], raw: str.raw[0] };
}

console.log(latex`\unicode`)
// { cooked: undefined, raw: "\\unicode" }
