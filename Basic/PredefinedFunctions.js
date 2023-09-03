//The eval() method evaluates JavaScript code represented as a string.
//The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.    
//The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN() to determine if the value is Not-A-Number.    
// The parseFloat() function parses a string argument and returns a floating point number.    

function circumference(r) {
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));             // Expected output: 28.695307297889173
console.log(circumference('4.567abcdefgh'));   // Expected output: 28.695307297889173
console.log(circumference('abcdefgh'));        // Expected output: NaN


//parseInt()  -The function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).    
//decodeURI() - The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.    
//The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.    
//The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).    
//The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).    
//The escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. It's deprecated and you should use encodeURI() or encodeURIComponent() instead.    
//The unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape(). It's deprecated and you should use decodeURI() or decodeURIComponent() instead.    


//look to Html Folder to list of all global function on Node.JS and Browser