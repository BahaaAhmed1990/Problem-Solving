function maxTriSum(numbers) {
    //your code here
    const uniqe = [];
    numbers.forEach((num, index) => {

        if (numbers.lastIndexOf(num) === index) {
            uniqe.push(num);
        }
    })
    console.log('numbers', uniqe)
    return uniqe.sort((a, b) => b - a).slice(0, 3)
        .reduce((acc, val) => acc + val)
}

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]))