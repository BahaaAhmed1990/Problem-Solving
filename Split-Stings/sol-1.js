function solution(str) {
    return str ? str.match(/\w{1,2}/g).map((item) => {
        if (item.length !== 2) {
            return item += '_'
        } else {
            return item
        }
    }) : []
}

console.log(solution('abc'))
console.log(solution('abcd'))
console.log(solution('abcde'))
console.log(solution(''))