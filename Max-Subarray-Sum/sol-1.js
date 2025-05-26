function maxSequence(arr) {
    // ...
    let maxSum = 0;
    let currentSum = 0;

    // make sub arrays from orignal array 
    for (let i = 1; i <= arr.length; i++) {
        // console.log('i', i);

        for (let j = 0; j < arr.length; j++) {
            // console.log([j, i + j])
            if (i + j > arr.length) {
                console.log('end')
                break
            }
            let slicedArr = arr.slice(j, i + j)
            currentSum = slicedArr.reduce((acc, val) => acc + val);
            if (currentSum > maxSum) { maxSum = currentSum }
            console.log('sliced arr', slicedArr)
            console.log('current sum', currentSum)
            console.log('max sum', maxSum)
            console.log('*********')

        }
        console.log('=======================')
    }

    return maxSum
}

console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]))
// console.log(maxSequence([47]))