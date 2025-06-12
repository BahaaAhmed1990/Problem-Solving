function isValidChess960(pieces) {
    const tests = [
        function (pieces) {
            return (pieces.indexOf('B') % 2 === 0) !== (pieces.lastIndexOf('B') % 2 === 0)
        }, function (pieces) {

            return pieces.indexOf('R') < pieces.indexOf('K') && pieces.lastIndexOf('R') > pieces.indexOf('K')
        }
    ]
    return tests.every((fn) => fn(pieces));
}
// console.log(isValidChess960("RNBQKBNR")) //true
// console.log(isValidChess960("QNNBBRKR")) //true
console.log(isValidChess960("QRNNBBRK")) // false
// console.log(isValidChess960("QNBNBRKR")) // false