function encryptThis(text) {
    return text.split(' ').map(word => {
        return word
            .replace(/(^\w)(\w)(\w*)(\w$)/g, '$1$4$3$2')
            .replace(/^\w/g, word.charCodeAt(0))
    }).join(' ')
}

console.log(encryptThis('A'));
console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

