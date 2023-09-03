////https://medium.com/nodejsmadeeasy/nodejs-event-loop-lag-5d5928fd03c

// it should print “eventlooplag ” roughly in 100ms or a little bit more but it got printed after 2.495s, approximately lagging by 2.395 seconds

console.time('eventlooplag');
//event-loop timer phase
setTimeout(() => console.timeEnd('eventlooplag'), 100);
/*blocking code, stalling event loop, delaying   the  execution of the setTimeout ie lag in the    event loop
*/
const min = 2;
const max = 3e6;
const primes = [];
function generatePrimes(start, range) {
    let isPrime = true;
    let end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}
generatePrimes(min, max);
console.log(primes)