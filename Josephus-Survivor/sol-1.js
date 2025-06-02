function josephusSurvivor(n, k) {
    //your code here
    // console.log(Array(n).fill().map((_, i) => i + 1))
    let items = Array(n).fill().map((_, i) => i + 1);
    let index = 0;
    while (items.length > 1) {
        index = (index + k - 1) % items.length;
        items.splice(index, 1)
    }
    return items[0]
}

console.log(josephusSurvivor(7, 3)) // 4
console.log(josephusSurvivor(11, 19)) // 10