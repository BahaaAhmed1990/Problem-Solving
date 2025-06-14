function minValue(values) {
    //remove repeated numbers
    return Number(values.filter((num, index) => index === values.lastIndexOf(num)).sort((a, b) => a - b).join(''))
}

// console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]))
// console.log(minValue([5, 7, 5, 9, 7]))
console.log(minValue([1, 3, 1]))