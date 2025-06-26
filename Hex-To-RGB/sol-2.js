function hexStringToRGB(hexString) {

    return {
        r: parseInt(hexString.slice(1, 3), 16),
        g: parseInt(hexString.slice(3, 5), 16),
        b: parseInt(hexString.slice(5,), 16),
    }
}

console.log(hexStringToRGB('#Ff9933'))
console.log(hexStringToRGB('#beaded'))
console.log(hexStringToRGB('#111111'))
console.log(hexStringToRGB('#000000'))
console.log(hexStringToRGB('#Fa3456'))

function hexToDecimal(hex) {
    // console.log(hex)
    let hexMap =
    {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
    }

    return hex.split('').reduce((acc, val, index) => {
        if (/[^\d]/g.test(val)) {
            // console.log('val', val);
            return acc + (hexMap[val.toUpperCase()] * Math.pow(16, Math.abs(index - 1)))
        }
        return acc + (Number(val) * Math.pow(16, Math.abs(index - 1)))
    }, 0)

}