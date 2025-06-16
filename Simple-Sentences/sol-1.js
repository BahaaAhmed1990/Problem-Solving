function makeSentence(parts) {
    // TODO
    return parts.join(' ').replaceAll(' , ', ', ').replaceAll(/(\s{0,}\.\s{0,})/g, '') + '.'
}

console.log(makeSentence(['hello', ',', 'my', 'dear']))
console.log(makeSentence(['hello', 'world', '.', '.', '.']))