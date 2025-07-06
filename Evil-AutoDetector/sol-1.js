function autocorrect(input) {
    return input.replaceAll(/\b(?:you+|u)\b/gi, function (match) {
        console.log(match);
        return 'your sister'
    })
}

// console.log(autocorrect('I miss you!'))/
// console.log(autocorrect('I miss youuuuuuuuu'))
// console.log(autocorrect('I miss youtubr!'))
// console.log(autocorrect('I want to film the bayou with you and put it on youtube'))
console.log(autocorrect('You u youville utube you youyouyou uuu raiyou united youuuu u you'))