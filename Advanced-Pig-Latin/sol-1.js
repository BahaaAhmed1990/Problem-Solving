function translate(sentence) {
    //Convert the sentence to Pig Latin!
    // or should I say...
    //Onvertcay ethay entencesay otay Igpay Atinlay!

    // console.log('first')
    return sentence.replace(/\b\w+\b/g, (word) => {
        // console.log(word)
        //check for digit
        if (/[\d]+/g.test(word)) {
            return word
        }
        // 1. word start with vowel
        if (/^[aeiou]/i.exec(word)) {
            // console.log(word)
            return word += 'way'
        }
        // 2. word start with constant
        else {
            // console.log(word)
            // check if word has any vowel inside
            if (/[\w](?=[aeiou])/.test(word)) {
                let char = word.match(/[\w](?=[aeiou])/)
                // console.log(char)
                let firstPart = word.slice(char.index + 1, word.length)
                let secongPart = word.slice(0, char.index + 1).toLowerCase();
                // console.log(firstPart)
                // check first letter capital
                // console.log(word)
                if (/^[A-Z]/.test(word)) {
                    firstPart = firstPart[0].toUpperCase() + firstPart.slice(1, firstPart.length)
                    // console.log(firstPart)
                }
                word = firstPart + secongPart + 'ay'
                // console.log(word)

                return word
            }
            // word has no vowels
            return word + 'ay'
        }
    })
};

// console.log(translate('Hello')) // ellohay
// console.log(translate('How are you ?')) 
console.log(translate('Pizza? vvv Yes Please!! 6340311941174542')) 
