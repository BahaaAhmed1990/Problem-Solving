function askForMissingDetails(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter((dev) => {
        for (const key in dev) {
            // console.log(key)
            if (dev[key] === null) {
                dev['question'] = `Hi, could you please provide your ${key}`
                return dev
            }
        }
    })
}

console.log(askForMissingDetails([
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
]))