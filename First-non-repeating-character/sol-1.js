function firstNonRepeatingLetter(s) {
    // Add your code here
    let nonRepeated = '';
    const repeatedChars = [];
    for (let i = 0; i < s.length; i++) {

        // check if this letter exsist after this index
        if (s.toLowerCase().includes(s[i].toLowerCase(), i + 1)) {
            //     push char in repeated array
            repeatedChars.push(s[i].toLowerCase());
            continue;
        }
        // check if this letter exsist before (in repeated array)
        if (repeatedChars.includes(s[i].toLowerCase())) {
            continue;
        }
        else {
            nonRepeated = s[i];
            break;
        }

    }
    return nonRepeated
}

console.log(firstNonRepeatingLetter('ssTst'))