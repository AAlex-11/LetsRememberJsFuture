//--- (1) setTimeut return Promise

function Promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1000), 1000); //1 sec + return 1000 as resolve
    })
}

function Promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2000), 2000); //1 sec + return 1000 as resolve
    })
}

console.time('start');
Promise.all([Promise1(), Promise2()])
    .then(val => {
        console.log(console.timeEnd('start', 0))
        console.log(val)
    })

//--- (2) working even simple value instead Promise    

Promise.all([Promise1(), Promise2(), "string"])
    .then(val => console.log(val))

//--- (3) handle reject

function Promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(5000), 2000); //1 sec + return 1000 as resolve
    })
}

Promise.all([Promise1(), Promise3().catch(err => { return err })])
    .then(val => console.log(val))


//--- (4) unhaddled rejection  


Promise.all([Promise1(), Promise3()])
    .then(val => console.log(val))

//--- (5) imediate rejection 

/*
Promise.all([Promise1(), Promise.reject('instant reject')])
    .then(val => console.log(val))

*/

//--- (6) continue on PromiseWaitAny