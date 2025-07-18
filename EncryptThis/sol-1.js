function encryptThis(text) {
    return text.split(' ').map(word => {
        let encrypt = '';

        if (word.length === 1) {
            encrypt += `${word.charCodeAt(0)}`;
            return encrypt
        }
        if (word.length === 2) {
            encrypt += `${word.charCodeAt(0)}${word.charAt(1)}`;
            return encrypt
        }
        encrypt += `${word.charCodeAt(0)}${word.charAt(word.length - 1)}${word.slice(2, -1)}${word.charAt(1)}`;
        return encrypt
    }).join(' ')
}

console.log(encryptThis('A'));
console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

