//--- (1) fist call executor function creates finalstate
console.log(`
--- (1) ---`)

const myPromise = new Promise(function (resolve, reject) {
    resolve('1'); //only first call make sense
    resolve('2')
    reject(3)
})

const myPromise3= new Promise(function (resolve, reject) {
    reject(3)
})

console.log(myPromise)

//--- (2) correct syntax
console.log(`
--- (2) ---`)

const myPromise1 = new Promise(function (resolve, reject) {       //correct syntax - we need to define callback function
    resolve('1');
})
const myPromise2 = new Promise(() => function (resolve, reject) { //wrong syntax - arrow function
    resolve('2');                                                 //() => function() defines a function that returns a function
})
myPromise1.then(console.log(myPromise1));
myPromise2.then(console.log(myPromise2));

//--- (3) min access to Promise result from onFulfilled function
console.log(`
--- (3) ---`)

myPromise1.then(function (value) {
    console.log('onFullFiled =' + value)
});

//--- (4) and onRejected
console.log(`
--- (4) ---`)

myPromise3.then(function (value) {
    console.log('onFullFiled =' + value)
}, (reason)=> {console.log('rejected reason =' + reason)});


console.log('code end')


