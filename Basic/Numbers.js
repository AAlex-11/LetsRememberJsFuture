//https://www.w3schools.com/js/js_numbers.asp

//--- (1) JavaScript Numbers are Always 64-bit Floating Point
console.log(`
 --- (1) ---`);

let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000 
console.log(x, y, y - x)


//--- (2) limits
console.log(`
 --- (2) ---`);

console.log(Number.EPSILON)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)


//--- (3) JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
console.log(`
 --- (3) ---`);

let z = BigInt("123456789012345678901234567890");
console.log(z)

//--- (4) The JavaScript interpreter works from left to right. 
//JavaScript uses the + operator for both addition and concatenation.
console.log(`
 --- (4) ---`);

console.log(20 + 30)     //because x and y are both numbers.
console.log('20' + 30)
console.log(20 + '30')   // because string present

let a = "100";
let b = "10";
let c = a - b;
console.log(c)
console.log(20 / '30')

//--- (5) NaN - Not a Number
console.log(`
 --- (5) ---`);

console.log(20 / 'apple')


//--- (6) typeof NaN returns number:
console.log(`
 --- (6) ---`);

console.log(typeof NaN)

//--- (7) operation with NaM
console.log(`
 --- (7) ---`);

let q = NaN;
let w = 5;
let r = '5';
let e = q + w;
let t = q + r;
console.log(e, t)

//---(8) Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
console.log(`
 --- (8) ---`);

let myNumber = 32;
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}

console.log(2 / 0);
console.log(-2 / 0);

//--- (9) hexadecimal preceded by 0x.
console.log(`
 --- (9) ---`);

console.log(0xFFAABB);

//--- (10) toString() method to output numbers from base 2 to base 36.
console.log(`
 --- (10) ---`);

let mNumber = 32;
console.log(mNumber.toString(32));
console.log(mNumber.toString(16));
console.log(mNumber.toString(12));
console.log(mNumber.toString(10));
console.log(mNumber.toString(8));
console.log(mNumber.toString(2));


//---(11) JavaScript Numbers as Objects
console.log(`
 --- (11) ---`);

let p = 500;
let o = new Number(500);
console.log(o, p)

//--- (12) Note the difference between (x==y) and (x===y).
console.log(`
 --- (12) ---`);

console.log(o == p, o === p)

//--- (13) Comparing two JavaScript objects always returns false.
console.log(`
 --- (13) ---`);

let l = new Number(500);
console.log(o == l, o === l)

//--- (14) toFixed
console.log(`
 --- (14) ---`);

let num = 5.56789;
console.log(num.toFixed(), num.toFixed(2))

//more - https://www.w3schools.com/jsref/jsref_obj_number.asp