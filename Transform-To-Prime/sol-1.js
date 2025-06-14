function minimumNumber(numbers) {
    //your code here
    const sum = numbers.reduce((acc, val) => acc + val)
    console.log(sum)
    return nextPrime(sum) - sum;

}

// console.log(minimumNumber([50, 39, 49, 6, 17, 28]))
// console.log(minimumNumber([2, 12, 8, 4, 6]))
// console.log(minimumNumber([3, 1, 2]))
// console.log(minimumNumber([1, 1, 1]))
console.log(minimumNumber([720, 1, 9, 281, 869, 4, 6, 10, 22, 14, 846, 68, 44, 1, 40, 2, 52, 605, 91]))

function nextPrime(num) {
    while (true) {
        if (isPrime(num)) {
            return num;
        }
        num++;
    }
}

function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i * i < n; i++) { // check factors from 2 up to n*n
        if (n % i === 0) { // if it divisible it not prime 
            return false
        }
    }
    return true
}