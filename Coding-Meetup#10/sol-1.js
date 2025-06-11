function addUsername(list) {
    // thank you for checking out the Coding Meetup kata :)
    let currYear = new Date(Date.now()).getFullYear()

    return list.map((dev) => {
        return {
            ...dev,
            userName: `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${currYear - dev.age}`
        }
    })

}

console.log(addUsername([
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]))