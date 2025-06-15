function balancedNum(number) {
    if (number < 100) {
        return 'Balanced'
    }
    let leftMid = 0, rightMid = 0, sumLeft = 0, sumRight = 0;
    let numArr = String(number).split('')
    // console.log(numArr)
    // length of array is even
    if (numArr.length % 2 === 0) {

        leftMid = Math.ceil(numArr.length / 2)
        rightMid = Math.ceil(numArr.length / 2) + 1
    } else {
        leftMid = Math.ceil(numArr.length / 2)
        rightMid = Math.ceil(numArr.length / 2)
    }
    // console.log('leftMid', leftMid)
    // console.log('rMid', rightMid)

    sumLeft = numArr.slice(0, leftMid - 1).reduce((acc, val) => Number(acc) + Number(val));
    sumRight = numArr.slice(rightMid,).reduce((acc, val) => Number(acc) + Number(val));

    // console.log('leftsum', sumLeft)
    // console.log('rsum', sumRight)
    if (sumLeft === sumRight) {
        return 'Balanced'
    }
    return "Not Balanced"
}

console.log(balancedNum(7))
console.log(balancedNum(88))
console.log(balancedNum(808))
console.log(balancedNum(88909))
console.log(balancedNum(27102983))
console.log(balancedNum(295591))