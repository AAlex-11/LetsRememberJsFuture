// this function accept promise as prm
function Log(prm){
    prm.then(val => console.log(val))
}

const somePromise = new Promise(
    (resolve, reject) => resolve("ok 1")
)

//smple correct call
Log(somePromise)

//create Promise from any value
const val = "ok 2"
const promisiedValue = Promise.resolve(val)
Log(promisiedValue)

//created rjected Promise
const rejectedValue = Promise.reject(new Error ('Not OK'))
Log(rejectedValue)



