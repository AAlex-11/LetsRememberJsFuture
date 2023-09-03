//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//While the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local


//--- (1) Date object is slightly smaller than the maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991). A Date object can represent a maximum of ±8,640,000,000,000,000 milliseconds
//This is the range from April 20, 271821 BC to September 13, 275760 AD. Otherwise timestamp value of NaN, which is an "Invalid Date".
console.log(`
--- (1) ---`);

const maxNilliceconsds = 8.64e15
console.log(new Date(maxNilliceconsds).toString());
console.log(new Date(maxNilliceconsds + 1).toString());

//--- (2) now and New Date return milliseconds 
console.log(`
--- (2) ---`);

const Now = Date.now().toString();
const Start = new Date('July 20, 69 00:20:18')
console.log(Now, Start, Now - Start)

// --- (3) Get formatting parts of date (local and UTC), the same methods to Set
//Some methods, including the Date() constructor, Date.UTC(), and the deprecated getYear()/setYear() methods, interpret a two-digit year as a year in the 1900s. For example, new Date(99, 5, 24) is interpreted as June 24, 1999, not June 24, 99. See Interpretation of two-digit years for more information.
console.log(`
--- (3) ---`);

console.log(Start.getFullYear(), Start.getUTCFullYear())
console.log(Start.getMonth(), Start.getUTCMonth())
console.log(Start.getDate(), Start.getUTCDate())
console.log(Start.getHours(), Start.getUTCHours())
console.log(Start.getMinutes(), Start.getUTCMinutes())
console.log(Start.getSeconds(), Start.getUTCSeconds())
console.log(Start.getMilliseconds(), Start.getUTCMilliseconds())
console.log(Start.getDay(), Start.getUTCDay())

//--- (4) Date.parse string
console.log(`
--- (4) ---`);

const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
const javaScriptRelease = Date.parse('04 Dec 95 00:12:00 GMT');

console.log(unixTimeZero); // Expected output: 0
console.log(javaScriptRelease); // Expected output: 818035920000

//--- (5) Date time get formatting string result
// ISO format - YYYY-MM-DDTHH:mm:ss.sssZ - https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
console.log(`
--- (5) ---`);

const date = new Date("2020-05-12T23:50:21.817Z");
console.log(date.toString());                     // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
console.log(date.toDateString());                 // Tue May 12 2020
console.log(date.toTimeString());                 // 18:50:21 GMT-0500 (Central Daylight Time)
console.log(date[Symbol.toPrimitive]("string"));  // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
console.log(date.toISOString());                  // 2020-05-12T23:50:21.817Z
console.log(date.toJSON());                       // 2020-05-12T23:50:21.817Z
console.log(date.toUTCString());                  // Tue, 12 May 2020 23:50:21 GMT
console.log(date.toLocaleString());               // 5/12/2020, 6:50:21 PM
console.log(date.toLocaleDateString());           // 5/12/2020
console.log(date.toLocaleTimeString());           // 6:50:21 PM

//--- (6) measure interval
console.log(`
--- (6) ---`);

const start = Date.now();
console.log('starting timer...', start); // Expected output: "starting timer..."
setTimeout(() => {
    const millis = Date.now() - start;
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);  // Expected output: "seconds elapsed = 2"
}, 1000);



