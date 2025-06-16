function vowel2index(str) {
    //code me

    return str.split('')
        .map((c, index) => {
            if (/[aeiou]/gi.test(c)) {
                return index + 1
            }
            return c
        }).join('')

    // OR
    // return str.replace(/[aeiou]/gi, (c, i, input, group) => {
    //     console.log(input, group)
    //     return i + 1

    // })

}
console.log(vowel2index('this is my string'))
// console.log(vowel2index('Codewars is the best site in the world'))
// console.log(vowel2index(''))


