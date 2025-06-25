function rot13(str) {
    const alphapets = 'abcdefghijklmnopqrstuvwxyz'

    return str.split('').map(char => {
        if (/[^A-Za-z]/g.test(char)) { return char }

        let newIndex = alphapets.indexOf(char.toLowerCase()) + 13
        if (newIndex >= alphapets.length) {
            newIndex = (newIndex % alphapets.length)
        }

        return /[A-Z]/g.test(char) ? alphapets[newIndex].toLocaleUpperCase() : alphapets[newIndex]
        // console.log(rotChar)
    }).join('');
}
console.log(rot13('EBG13 rknzcyr.'))
// console.log(rot13('n')) // guvf