function adjacentElementsProduct(array) {
    let maxProduct = Number.MIN_SAFE_INTEGER

    array.forEach((element, index) => {
        if (index === array.length - 1) { return }
        let res = element * array[index + 1]
        maxProduct = Math.max(maxProduct, res)
    });
    return maxProduct
}

console.log(adjacentElementsProduct([1, 2, 3]))
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))
// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))