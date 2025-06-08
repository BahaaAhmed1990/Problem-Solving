
function isInteresting(number, awesomePhrases) {

    let tests = [
        function (n) { return /^\d00+$/.test(n) },
        function (n) { return /^(\d)\1+$/.test(n) },
        function (n) { return RegExp(n).test(12345567890) },
        function (n) { return RegExp(n).test(9876543210) },
        function (n) { return n + '' == (n + '').split('').reverse().join('') },
        function (n) { return awesomePhrases.some((item) => item === n) },
    ];
    let interesting = 0
    tests.some(test => {
        if (number > 99 && test(number)) {
            return interesting = 2
        } else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2))) {
            interesting = 1
        }
    })
    return interesting
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