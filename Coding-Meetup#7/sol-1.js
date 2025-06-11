function findSenior(list) {
    // thank you for checking out the Coding Meetup kata :)
    let senior = [];
    let maxAge = Number.MIN_VALUE;

    list.forEach((dev) => {
        if (dev.age > maxAge) {
            senior.splice(0);
            senior.push(dev)
        } else if (dev.age === maxAge) {
            senior.push(dev)
        }
        maxAge = Math.max(dev.age, maxAge);
    });
    return senior
}

// console.log(findSenior([
//     {
//         firstName: 'Mark',
//         lastName: 'G.',
//         country: 'Scotland',
//         continent: 'Europe',
//         age: 22,
//         language: 'JavaScript'
//     },
//     {
//         firstName: 'Victoria',
//         lastName: 'T.',
//         country: 'Puerto Rico',
//         continent: 'Americas',
//         age: 30,
//         language: 'Clojure'
//     },
//     {
//         firstName: 'Emma',
//         lastName: 'B.',
//         country: 'Norway',
//         continent: 'Europe',
//         age: 19,
//         language: 'Clojure'
//     }
// ]))

console.log(findSenior([
    { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
    { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Europe', age: 28, language: 'Java' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
    { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' },
    { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
]))

// console.log(findSenior([
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]))