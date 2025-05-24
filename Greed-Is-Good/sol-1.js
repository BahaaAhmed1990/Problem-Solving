function score(dice) {
    // Fill me in!
    let score = 0;
    let lastIndex = 0;
    const scoreRepeatMap = {
        1: 1000,
        5: 500,

    }

    // cpy arr and sort it.
    const sortedDice = dice.map((num => num)).sort();


    sortedDice.forEach((num, index) => {

        // see if this index is checked
        if (index > lastIndex || lastIndex == 0) {
            // check num is 1 ,5
            if (num === 1 || num === 5) {
                // check if num is repeated three times
                if (sortedDice[index + 2] === num) {

                    score += scoreRepeatMap[num]
                    lastIndex = index + 2;
                }
                // number not repeated
                else {
                    num === 1 ? score += 100 : score += 50
                }
            }
            // other numbers 
            else {
                // check if num is repeated three times
                if (sortedDice[index + 2] === num) {
                    score += (num * 100)
                    lastIndex = index + 2;
                }
                // number not repeated
                // do nothing
            }
        }


    });
    return score;
}

// test case
console.log(score([5, 1, 3, 4, 1]))
console.log(score([1, 1, 1, 3, 1]))
console.log(score([2, 4, 4, 5, 4]))
console.log(score([2, 2, 2, 2, 3]))