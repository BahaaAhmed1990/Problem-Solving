function generateHashtag(str) {
    if (str.length === 0 || /^\s+$/g.test(str)) { return false };

    let hashtag = '#' + (str.match(/\b[A-Za-z]+\b/g)
        .map(w => w[0].toUpperCase() + w.slice(1,))
        .join(''))

    return hashtag.length > 140 ? false : hashtag
}

console.log(generateHashtag("Hello there thanks for trying my Kata "))

console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(" "))
