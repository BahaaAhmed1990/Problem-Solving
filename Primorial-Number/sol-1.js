function numPrimorial(n) {
    //your code here
    let primes = [2];
    // console.log(nextPrime(1))
    for (let i = 1; i < n; i++) {
        // console.log(i)
        // let prime = 
        primes.push(nextPrime(primes[(primes.length - 1)] + 1))
    }
    console.log(primes)
    return primes.reduce((acc, val) => acc * val)
}
// console.log(numPrimorial(3))
// console.log(numPrimorial(5))

function nextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            return n
        }
        n++;
    }
}
function isPrime(n) {
    if (n === 2) { return true }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}