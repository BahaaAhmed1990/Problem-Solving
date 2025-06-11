function askForMissingDetails(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter(({ firstName, lastName, country, continent, age, language }) => !firstName || !lastName || !country || !continent || !age || !language).map((dev) => {
        console.log(Object.keys(dev))
        let misssing = Object.keys(dev).find(item => !dev[item])
        console.log(misssing)
        return {
            ...dev,
            question: `Hi, could you please provide your ${misssing}.`
        }
    })
}

console.log(askForMissingDetails([
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]))