function greetDevelopers(list) {
    // thank you for checking out my kata :)
    return list.map((item) => {
        return {
            ...item,
            greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`
        }
    })
}

console.log(greetDevelopers([
    {
        firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    },
    {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    },
    {
        firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    },
]
))