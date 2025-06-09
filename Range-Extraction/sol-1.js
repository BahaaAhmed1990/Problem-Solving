function solution(list) {
    // TODO: complete solution

    let rangeStr = '';
    let range = [];

    list.forEach((int, index) => {
        // find three consective numbers or more
        range.push(int);
        if (int + 1 === list[index + 1]) {
            console.log('range', range);
            return
        } else if (range.length > 2) {
            index === list.length - 1 ?
                rangeStr += range[0] + '-' + range[range.length - 1] :
                rangeStr += range[0] + '-' + range[range.length - 1] + ','
            range.splice(0)
            return
        } else if (range.length === 2) {
            index === list.length - 1 ?
                rangeStr += range[0] + ',' + range[1] :
                rangeStr += range[0] + ',' + range[1] + ','
            range.splice(0);
        } else {
            index === list.length - 1 ?
                rangeStr += range[0] :
                rangeStr += range[0] + ','
            range.splice(0)
        }

    })
    return rangeStr
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) //"-6,-3-1,3-5,7-11,14,15,17-20"
// console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))