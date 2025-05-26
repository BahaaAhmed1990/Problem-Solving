function solution(str) {
    return (str + '_').match(/\w{2}/g) || []
}

console.log(solution('abc'))
console.log(solution('abcd'))
console.log(solution('abcde'))
console.log(solution(''))