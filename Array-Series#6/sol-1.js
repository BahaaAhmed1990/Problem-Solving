function minimumSteps(numbers, value) {
    //your code here
    let nums = [],
        sum = 0;
    numbers.sort((a, b) => a - b).forEach(num => {
        sum += num;
        // console.log(sum)
        if (sum >= value) {
            return
        } else {
            nums.push(num)
        }
    });
    console.log(nums)
    return nums.length
}

// console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464))
// console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6))
console.log(minimumSteps([8, 9, 4, 2], 23))