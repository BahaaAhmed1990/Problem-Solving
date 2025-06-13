function arrayLeaders(numbers) {
    let leaders = [];
    while (numbers.length) {
        let firstNum = numbers.shift()
        let sum = numbers.reduce((acc, val) => acc + val, 0)

        if (firstNum > sum) {
            leaders.push(firstNum)
        }
    }
    return leaders;
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]))