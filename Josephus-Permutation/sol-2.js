function josephus(items, k) {
    let index = 0;
    let killArr = [];
    while (items.length > 0) {
        index = (index + k - 1) % items.length;
        killArr.push(items.splice(index, 1)[0])
    }
    return killArr
}

// console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
// console.log(josephus(["C", "o", 3, 5, "W", "a", "r", "s"], 4))
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8], 12)) //[ 4, 1, 8, 3, 2, 7, 6, 5 ]
// console.log(josephus(['C', 0, 'd', 3,
//     'W', 4, 'r', 5], 4)) // [ 3, 5, 'W', +0, 'C', 'd', 'r', 4 ]
// console.log(josephus([
//     true, false, true,
//     false, true, false,
//     true, false, true
// ], 9))