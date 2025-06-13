function productArray(numbers) {
    //your code here
    let prod = 1;
    let prodArr = [];
    numbers.forEach((_, index1) => {
        numbers.filter((_, index2) => index1 !== index2).forEach((n) => {
            prod *= n
        })
        prodArr.push(prod);
        prod = 1
        console.log(prod)
    });

    return prodArr
}
console.log(productArray([10, 3, 5, 6, 2]))
// console.log(productArray([1, 5, 2]))
// console.log(productArray([12, 20]))