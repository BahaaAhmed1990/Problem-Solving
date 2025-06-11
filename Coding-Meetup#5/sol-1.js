function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    let res = {};
    list.forEach(({ language }) => {
        console.log(language)
        res[language] = (res[language] || 0) + 1
    })
    return res
}

console.log(countLanguages([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]))