
function isInteresting(number, awesomePhrases) {


    // Go to town!
    awesomePhrases = awesomePhrases.sort((a, b) => a - b)
    let res = 2;

    // check is interesting
    for (let index = 0; index < 3; index++) {

        let testNum = number + index;
        console.log('res', res)
        console.log(' test number', testNum);
        console.log('awesomePhrases', awesomePhrases);

        // check if number less than 100
        if (testNum < 100) {
            res === 1 ? res : res -= 1
            console.log('============================')
            continue
        }


        // test if three zeros or more
        const threeDigits = /^\d0{2,}$/g.test(testNum);
        console.log('threeZeros', threeDigits)
        if (threeDigits) {
            return res;
        }

        // check every digit is same
        const sameDigits = /^(\d)\1*$/.test(testNum);
        console.log('sameDigits', sameDigits)
        if (sameDigits) {
            return res
        }

        // check number plaindrom
        const isPlainDrom = testNum.toString() === testNum.toString().split('').reverse().join('')
        console.log('isPlainDrom', isPlainDrom)
        if (isPlainDrom) {
            return res
        }

        // match awesomphrase array
        const isAwesome = testNum === awesomePhrases[0] || testNum === awesomePhrases[1] ? true : false;
        console.log('isAwesome', isAwesome)
        if (isAwesome) {
            // console.log(res)
            return res
        }

        // increment digits
        let numStr = testNum.toString();
        let increment = false;
        let decrement = false;

        // increment loop
        for (let index = 0; index < numStr.length; index++) {
            // console.log(numStr[index])
            if (index === numStr.length - 1) {
                // console.log('last digit')
                break
            }
            // check for nine (edge case)
            if (Number(numStr[index]) === 9 && Number(numStr[index + 1]) === 0) {
                increment = true;
                continue;
            }
            if (Number(numStr[index]) + 1 === Number(numStr[index + 1])) {
                increment = true;
                // console.log('continue')
                continue
            } else {
                increment = false
                // console.log('break')
                break;
            }
        }

        // decrement loop
        for (let index = 0; index < numStr.length; index++) {
            // console.log('decrement loop', numStr[index])
            if (index === numStr.length - 1) {
                // console.log('last digit')
                break
            }
            if (Number(numStr[index]) - 1 === Number(numStr[index + 1])) {
                decrement = true;
                // console.log('continue')
                continue
            } else {
                decrement = false
                // console.log('break')
                break;
            }
        }

        console.log('increment', increment)
        console.log('decrement', decrement)

        if (increment || decrement) {
            return res
        }
        console.log('============================')
        // reset res for next iteration
        res === 1 ? res : res -= 1
    }
    return 0

}

// console.log(isInteresting(1111, []));
// console.log(isInteresting(1234, []));
// console.log(isInteresting(54321, []));
// console.log(isInteresting(3, [1337, 256])) // 0
// console.log(isInteresting(1336, [1337, 256])) // 1
// console.log(isInteresting(1335, [1337, 256])) // 1
// console.log(isInteresting(1337, [1337, 256])) // 2
// console.log(isInteresting(11208, [1337, 256]))
// console.log(isInteresting(11209, [1337, 256]))
// console.log(isInteresting(67890, []))
// console.log(isInteresting(80038, []))
console.log(isInteresting(98, []))