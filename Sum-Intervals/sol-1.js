function sumIntervals(intervals) {
    //TODO
    let sum = 0;
    let sumArr = [];

    // sort array 
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    console.log('sortedIntervals', sortedIntervals)
    console.log('==========*===*=====*====*==========')
    //  reduce the array by checking overlapping intervals

    // 1. loop over the array to reduce overlap intervals
    sortedIntervals.forEach((interval, index) => {
        // check overlap with sum arr
        // first interval
        if (sumArr.length === 0) {
            console.log('first interval', interval)
            sumArr.push(interval);
            return;
        }
        let lastSum = sumArr[sumArr.length - 1]
        // if a2 < b1 overlap
        if (interval[0] <= lastSum[1]) {
            console.log('interval overlapped', interval)
            console.log('last Arr', lastSum)

            lastSum[0] = Math.min(interval[0], lastSum[0])
            lastSum[1] = Math.max(interval[1], lastSum[1])

        } else {
            sumArr.push(interval);
        }
        console.log('==========================')
        console.log('sum arr', sumArr)

    });

    // get the sum from sum array
    sumArr.forEach(item => {
        sum += item[1] - item[0]
    });

    return sum

}

// console.log(sumIntervals([[1, 7]]))
// console.log(sumIntervals([[1, 5], [6, 10]]))
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]))
// console.log(sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11]
// ])) // 19
// console.log(sumIntervals([-100000, 70]))
console.log(sumIntervals([[0, 20],
[-100000000, 10],
[30, 40]]))
