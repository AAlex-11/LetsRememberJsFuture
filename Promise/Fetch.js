
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API - replacement for XMLHttpRequest.
const fetch = require("node-fetch");

//--- (1) simple fetch with JSON
console.log(`
--- (1) ---`)

fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((json) => 
    console.log('1',json))


//--- (2) Async/Await fitch
//https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
console.log(`
--- (2) ---`);

async function downloadTxt(url) {
    const response = await fetch(url, {
        mode: 'no-cors',
    })
    const txt = await response.text();
    console.log('2')
    return txt
}

//--- (3) async IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
console.log(`
--- (3) ---`);

    (async () => {
        const txt = await downloadTxt("https://dog.ceo/api/breeds/list/all");
        console.log('3');
        console.log(txt);
    }
    )();

console.log('4')
txt = downloadTxt("https://dog.ceo/api/breeds/list/all").then(console.log('5'))
console.log(txt)
console.log('6')

//--- (4) error handle http://blog.niftysnippets.org/2018/06/common-fetch-errors.html








