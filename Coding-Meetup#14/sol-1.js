function orderFood(list) {
    // thank you for checking out the Coding Meetup kata :)
    let foodCount = {};

    list.forEach(({ meal }) => {
        foodCount[meal] = foodCount[meal] ? foodCount[meal] + 1 : 1
    });
    return foodCount
}
console.log(orderFood([
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
]))