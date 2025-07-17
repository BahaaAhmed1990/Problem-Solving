function trumpDetector(trumpySpeech) {
    //your code here
    const vowels = trumpySpeech.match(/(A)+|(e)+|(O)+|(U)+|(I)+/gi);

    let vowelsBases = vowels.length
    console.log('vowelsBases', vowelsBases);

    let repeatedVowelsCount = vowels
        .map(vowel => {
            if (vowel.length > 1) {
                return vowel.slice(1,)
            } return ''
        }).reduce((acc, val) => acc + val.length, 0)
    console.log('repeatedVowelsCount', repeatedVowelsCount);

    console.log('========================')

    return parseFloat((repeatedVowelsCount / vowelsBases).toFixed(2))
}

console.log(trumpDetector('HUUUUUGEEEE WAAAAAALL'))
console.log(trumpDetector('listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT'))
console.log(trumpDetector('I will build a huge wall'))