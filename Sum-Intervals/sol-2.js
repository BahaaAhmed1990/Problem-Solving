function sumIntervals(intervals) {
    //TODO
    let sortedIntervals = intervals.sort(([a, b], [c, d]) => a - c);
    let minNumber = Number.MIN_VALUE;
    let sum = 0;
    sortedIntervals.forEach(([a, b]) => {
        console.log(a, b)
        minNumber = Math.max(minNumber, a);
        console.log('minNumber,', minNumber)

        sum += Math.max(0, b - minNumber);
        console.log('sum', sum);

        minNumber = Math.max(minNumber, b)
        console.log('minNumber,', minNumber)


        console.log('============================')
    });
    return sum

}

// console.log(sumIntervals([[1, 7]]))
console.log(sumIntervals([[1, 5], [6, 10]]))
// console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]))
// console.log(sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11]
// ])) // 19
// console.log(sumIntervals([-100000, 70]))
// console.log(sumIntervals([[0, 20],
// [-100000000, 10],
// [30, 40]]))
