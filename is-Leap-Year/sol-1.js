function isLeapYear(year) {
    // TODO
    if ((year % 4 === 0)) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false
        }
        return true
    }
    return false
}

console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2020)) // true
console.log(isLeapYear(2015)) // false
console.log(isLeapYear(2100)) // false