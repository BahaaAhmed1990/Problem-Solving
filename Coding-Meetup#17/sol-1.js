function sortByLanguage(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.sort((a, b) => {
        if (a.language === b.language) {
            return a.firstName.localeCompare(b.firstName)
        }
        return a.language.localeCompare(b.language)

    })
}
console.log(sortByLanguage([{ "firstName": "Farjma", "lastName": "H.", "country": "Pakistan", "continent": "Asia", "age": 28, "language": "JavaScript" }, { "firstName": "Joao", "lastName": "D.", "country": "Portugal", "continent": "Europe", "age": 35, "language": "JavaScript" }, { "firstName": "Nikau", "lastName": "R.", "country": "New Zealand", "continent": "Oceania", "age": 39, "language": "Ruby" }, { "firstName": "Malik", "lastName": "J.", "country": "Greenland", "continent": "Europe", "age": 19, "language": "Python" }, { "firstName": "Harry", "lastName": "K.", "country": "Brazil", "continent": "Americas", "age": 19, "language": "Python" }, { "firstName": "Louise", "lastName": "F.", "country": "France", "continent": "Europe", "age": 22, "language": "Java" }, { "firstName": "Hannah", "lastName": "L.", "country": "Hungary", "continent": "Europe", "age": 29, "language": "JavaScript" }, { "firstName": "Sofya", "lastName": "C.", "country": "Estonia", "continent": "Europe", "age": 29, "language": "PHP" }, { "firstName": "Noel", "lastName": "O.", "country": "Albania", "continent": "Europe", "age": 23, "language": "Python" }, { "firstName": "Fatinar", "lastName": "K.", "country": "Saudi Arabia", "continent": "Asia", "age": 21, "language": "Clojure" }, { "firstName": "Sama", "lastName": "Y.", "country": "Montenegro", "continent": "Europe", "age": 39, "language": "C" }, { "firstName": "Muka", "lastName": "J.", "country": "Slovenia", "continent": "Europe", "age": 29, "language": "Clojure" }, { "firstName": "Madison", "lastName": "U.", "country": "United States", "continent": "Americas", "age": 32, "language": "Ruby" }, { "firstName": "Markio", "lastName": "G.", "country": "Scotland", "continent": "Europe", "age": 22, "language": "JavaScript" }, { "firstName": "Nor", "lastName": "E.", "country": "Malaysia", "continent": "Asia", "age": 21, "language": "Clojure" }, { "firstName": "Mario", "lastName": "Y.", "country": "Cyprus", "continent": "Europe", "age": 30, "language": "Java" }, { "firstName": "Noa", "lastName": "A.", "country": "Israel", "continent": "Asia", "age": 40, "language": "Ruby" }, { "firstName": "Kaia", "lastName": "S.", "country": "Tahiti", "continent": "Oceania", "age": 28, "language": "Clojure" }, { "firstName": "Oliverio", "lastName": "Q.", "country": "Australia", "continent": "Oceania", "age": 19, "language": "PHP" }, { "firstName": "Piotr", "lastName": "B.", "country": "Poland", "continent": "Europe", "age": 128, "language": "JavaScript" }]
))

// console.log(sortByLanguage([{ "firstName": "Kseniya", "lastName": "A.", "country": "Belarus", "continent": "Europe", "age": 29, "language": "JavaScript" }, { "firstName": "Jing", "lastName": "X.", "country": "China", "continent": "Asia", "age": 39, "language": "Ruby" }, { "firstName": "Andrei", "lastName": "E.", "country": "Romania", "continent": "Europe", "age": 59, "language": "C" }, { "firstName": "Maria", "lastName": "S.", "country": "Peru", "continent": "Americas", "age": 60, "language": "C" }, { "firstName": "Chloe", "lastName": "K.", "country": "Guernsey", "continent": "Europe", "age": 88, "language": "Ruby" }, { "firstName": "Viktoria", "lastName": "W.", "country": "Bulgaria", "continent": "Europe", "age": 98, "language": "PHP" }, { "firstName": "Piotr", "lastName": "B.", "country": "Poland", "continent": "Europe", "age": 128, "language": "JavaScript" }]
// ))


// console.log(sortByLanguage([
//     { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
//     { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//     { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//     { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
// ]))

// console.log(sortByLanguage([
//     { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
//     { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//     { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
// ]))
