function isbn10(isbn) {
    return /^\d{9}[0-9X]$/gi.test(isbn)
        && isbn.split('').reduce((acc, val, index) => {
            if (val.toLowerCase() === 'x') {
                return Number(acc) + (10 * (index + 1))
            }
            return Number(acc) + (Number(val) * (index + 1))
        }, 0) % 11 === 0 ? true : false
}
console.log(isbn10('1112223339'))
console.log(isbn10('111222333'))
console.log(isbn10('1112223339X'))
console.log(isbn10('1234554321'))