//Promise simeout merge to one
//https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick

function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const start = Date.now();

for (let i = 0; i < 5; i++) {
    Sleep(1000).then(() => {
        const millis = Date.now() - start
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
        console.log('+', i, `${Math.floor(millis / 1000)}`)
    })
}

//each one sec

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        const millis = Date.now() - start
        console.log('-',i, `${Math.floor(millis / 1000)}`), 1000
    })
}

//https://nodejs.org/en/docs/guides/timers-in-node
//clear timer interval

const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
}, 1000);

const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
});

const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
}, 2000);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);

