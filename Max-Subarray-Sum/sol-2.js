function maxSequence(arr) {
    // ...
    let sum = 0, min = 0, i, ans = 0;

    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        sum += arr[i]
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);

        console.log('sum', sum)
        console.log('min', min)
        console.log('ans', ans)

        console.log('========================')
    }

    return ans
}

console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]))
// console.log(maxSequence([47]))
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
