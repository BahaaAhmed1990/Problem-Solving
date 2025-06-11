function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter(({ firstName }) => {
        let res = 0;
        firstName.split('').forEach((c, i) => {
            res += firstName.charCodeAt(i)
        })
        console.log(res)
        return res % 2 === 0 ? false : true
    })
}

console.log(findOddNames([
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]))

console.log(findOddNames([
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' }
]))