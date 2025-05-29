function firstNonRepeatingLetter(s) {
    // Add your code here
    let str = s.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return s[i]
        }
    }
    return ''
}

console.log(firstNonRepeatingLetter('sssL'))