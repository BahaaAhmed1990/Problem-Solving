function josephus(items, k) {

    let nextKillRef, killArr = [];
    let survivorArr = items.concat();
    console.log('survivorArr first', survivorArr)
    // kill seven times (length of arr)
    for (let i = 0; i < items.length; i++) {
        // 1. calculate next Kill reference index
        let newKillCountIndex = survivorArr.indexOf(nextKillRef) !== -1 ? survivorArr.indexOf(nextKillRef) : 0;
        console.log('newKillCountIndex', newKillCountIndex)

        // 2. calculate new index
        let newKillIndex = newKillCountIndex + k;
        // check newKillIndex greater than survivor array length
        if (newKillIndex > survivorArr.length) {
            // recalculate newKill
            newKillIndex % survivorArr.length === 0 ? newKillIndex = survivorArr.length :
                newKillIndex = newKillIndex % survivorArr.length
        }
        console.log('newKillIndex', newKillIndex);

        // 3. add newkillItem to KillArr
        killArr.push(survivorArr[newKillIndex - 1])
        console.log('killArr', killArr);

        // 4. update next Kill reference
        nextKillRef = survivorArr[newKillIndex]
        // check if next kill ref was last one reset it
        if (nextKillRef === undefined) {
            nextKillRef = survivorArr[0]
        }
        console.log('nextKillRef', nextKillRef)

        // 5. update surviverArr by remove kill
        survivorArr.splice(newKillIndex - 1, 1)
        console.log('survivorArr', survivorArr);

        console.log('+++++++++++++++++++++++++++++++++++++++++++++')
    }
    console.log(killArr.length)
    return killArr
}

// console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
// console.log(josephus(["C", "o", 3, 5, "W", "a", "r", "s"], 4))
// console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8], 12)) //[ 4, 1, 8, 3, 2, 7, 6, 5 ]
// console.log(josephus(['C', 0, 'd', 3,
//     'W', 4, 'r', 5], 4)) // [ 3, 5, 'W', +0, 'C', 'd', 'r', 4 ]
console.log(josephus([
    true, false, true,
    false, true, false,
    true, false, true
], 9))