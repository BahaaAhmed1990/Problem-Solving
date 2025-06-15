function strong(n) {

    // console.log(factorial(3))
    let factorialSum = 0;

    String(n).split('').forEach((num) => {
        factorialSum += factorial(Number(num))
    })
    return factorialSum === n ? "STRONG!!!!" : "Not Strong !!";
}

// console.log(strong(123))
console.log(strong(145))

function factorial(n) {
    let res = 1;
    // console.log('n', n)
    for (let num = n; num > 0; num--) {
        // console.log('num', num)
        res *= num
    }
    return res
}