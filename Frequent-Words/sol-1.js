function topThreeWords(text) {
    // console.log(Math.max(undefined, 9))
    let count = {};
    let arr = text.toLowerCase().match(/[a-z']+/gi)
    arr.forEach((word, index) => {
        // console.log('word', word)
        if (word.replace(/'/g, '') === '') return;
        count[word] = (count[word] || 0) + 1
    })
    // console.log(count)
    return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 3).map((item => item[0]))
}

// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb c'c cC e e e"));
console.log(topThreeWords(" ' "));