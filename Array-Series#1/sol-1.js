function minSum(arr) {
    // your code here
    let sortedNums = arr.sort((a, b) => b - a)
    let res = 0;

    while (true) {
        // update res
        res += sortedNums[0] * sortedNums[sortedNums.length - 1]
        // remove two numbers
        sortedNums.splice(0, 1)
        sortedNums.splice(sortedNums.length - 1, 1)
        console.log(sortedNums);
        if (sortedNums.length <= 0) {
            break
        }
    }
    return res
}

// console.log(minSum([5, 4, 2, 3]))//22
// console.log(minSum([12, 6, 10, 26, 3, 24]))//, 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]))//, 74);