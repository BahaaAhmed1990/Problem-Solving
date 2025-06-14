function rowWeights(array) {
    //your code here
    let weights = [0, 0];

    array.forEach((elem, index) => {
        if (index % 2 === 0) {
            weights[0] += elem
        } else {
            weights[1] += elem
        }
    });

    return weights
}

console.log(rowWeights([80]))
console.log(rowWeights([50, 60, 70, 80]))
console.log(rowWeights([100, 50]))