function disariumNumber(n) {
    //your code here
    let res = 0;
    String(n).split('').forEach((num, index) => {
        res += Math.pow(Number(num), index + 1)
    })
    return res === n ? 'Disarium !!' : 'Not !!'
}

console.log(disariumNumber(89))
console.log(disariumNumber(546))