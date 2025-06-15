function specialNumber(n) {
    //your code here
    return String(n).split('').every(num => Number(num) <= 5) ? 'Special!!' : 'NOT!!'
    return /[0-5]/.test(n) ? 'Special!!' : 'NOT!!'
}

console.log(specialNumber(5))
console.log(specialNumber(513))
console.log(specialNumber(23))
console.log(specialNumber(9))