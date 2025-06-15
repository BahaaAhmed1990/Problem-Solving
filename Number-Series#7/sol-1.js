function extraPerfect(n) {
    //your code here
    let nums = [];
    for (let i = 1; i <= n; i += 2) {
        console.log(i)
        nums.push(i)
    }
    return nums
}

console.log(extraPerfect(3))