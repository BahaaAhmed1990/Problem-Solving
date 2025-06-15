function jumpingNumber(n) {
    //your code here
    let numArr = String(n).split('');
    return numArr.every((num, index) => {
        if (index === numArr.length - 1) { return true }
        return Math.abs(Number(num) - Number(numArr[index + 1])) === 1
    }) ? 'Jumping!!' : 'Not!!'
}

console.log(jumpingNumber(6))
console.log(jumpingNumber(97))
console.log(jumpingNumber(4343456))
console.log(jumpingNumber(89098))