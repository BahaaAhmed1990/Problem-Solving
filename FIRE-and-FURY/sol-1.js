var fireAndFury = function (tweet) {
    // Your code here
    let res = "";
    let fireRepeat = 'and you ', furyRepeat = 'relly ';
    let consectiveMatches = [];

    if (/[^fireuy]/gi.test(tweet)) {
        return "Fake tweet."
    }
    const matches = tweet.match(/(fire|fury)/gi)
    console.log('matches', matches);

    matches && matches.forEach((match, index) => {
        consectiveMatches.push(match);

        // check if next match is consective
        if (match === matches[index + 1]) {
            console.log('consectiveMatches', consectiveMatches);
            return
        }
        else if (consectiveMatches.length > 0) {
            console.log('not consectiveMatches', consectiveMatches)
            match === 'FIRE' ?
                res += 'You ' + fireRepeat.repeat(consectiveMatches.length - 1) + 'are fired! ' :
                res += 'I am ' + furyRepeat.repeat(consectiveMatches.length - 1) + 'furious. ';
            consectiveMatches.splice(0);
        }
    });
    return res === '' ? "Fake tweet." : res.trim()
}
// console.log(fireAndFury("FURYYYFIREYYFIRE"))// "I am furious. You and you are fired!";
// console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"))//, "You are fired! I am really furious. You are fired!"
// console.log(fireAndFury(''))
console.log(fireAndFury('AAFIREBBFURYCC'))