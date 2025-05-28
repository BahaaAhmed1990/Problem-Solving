function divisors(m, n) {
    // console.log('first', m, n);
    // console.log(getDivisors(9));

    let subArrays = [];

    for (let i = m; i <= n; i++) {
        // console.log(i)

        // get divesors and square them
        let divisorsSqrtArr = getDivisors(i).map(num => num * num);

        // check is sqrts sum is square
        let sumSqrt = divisorsSqrtArr.reduce((acc, val) => val + acc);
        // console.log(divisorsSqrtArr)
        // console.log(Number.isInteger(sumSqrt))

        if (Number.isInteger(Math.sqrt(sumSqrt))) {
            subArrays.push([i, sumSqrt]);
        }

    }
    return subArrays
}

function getDivisors(num) {

    let divisorsArr = [];
    for (let i = 1; i <= num; i++) {
        // console.log(i)
        num % i === 0 ? divisorsArr.push(i) : null
    }
    return divisorsArr
}
console.log(divisors(41, 250))