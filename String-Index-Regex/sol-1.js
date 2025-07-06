String.prototype.indexOf = function (search, index = 0) {

    const regex = new RegExp(search, 'g');
    regex.lastIndex = index
    let match = regex.exec(this)
    return match ? match.index : -1
};

String.prototype.lastIndexOf = function (search, index = this.length) {
    const regex = new RegExp(search, 'g');
    let lastIndex = -1;

    while (true) {
        let match = regex.exec(this);


        if (match === null || match.index > index) break

        lastIndex = match.index;
        regex.lastIndex = match.index + 1

    }
    return lastIndex

};
console.log("abcba".lastIndexOf("cb", 1)) //3
// console.log("abcba".indexOf(/bc|cb/, 2)) // 1
// console.log("abcba".indexOf(/\d/)) // 1
// console.log("avvv".indexOf('l', 7))
// console.log(String.prototype.indexOf.toString())
// console.log("abcba".indexOf('b', 2)) //3
// console.log("abcba".lastIndexOf('b')) //3
// console.log("abcba".lastIndexOf(/b/g)) //3
// console.log("abcba".indexOf('d')) //-1