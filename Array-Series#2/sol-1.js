function maxProduct(numbers, size) {
    //your code here
    return numbers.sort((a, b) => b - a).slice(0, size)
        .reduce((acc, val) => { return acc * val }, 1)
}
console.log(maxProduct([10, 8, 7, 9], 3));
console.log(maxProduct([4, 3, 5], 2));
