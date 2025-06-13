function minSum(arr) {
    // your code here
    let sortedNums = arr.sort((a, b) => b - a)
    let res = 0;

    while (sortedNums.length) {
        // update res
        res += sortedNums.pop() * sortedNums.shift()

    }
    return res
}

// console.log(minSum([5, 4, 2, 3]))//22
// console.log(minSum([12, 6, 10, 26, 3, 24]))//, 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]))//, 74);