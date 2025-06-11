function getAverageAge(list) {
    // thank you for checking out the Coding Meetup kata :)


    return Math.round(list.reduce((acc, currVal) => {
        return acc + currVal.age
    }, 0) / list.length)
}
console.log(getAverageAge([

    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 29, language: 'Python' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 32, language: 'Python' },
]))

// console.log(getAverageAge([
//     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },

// ]))