function maxGap(numbers) {
    //your code here
    let gap = 0;

    numbers.sort((a, b) => b - a).forEach((num, index) => {
        if (index === numbers.length - 1) { return }

        gap = Math.max(gap, (num - numbers[index + 1]))
    });

    return gap
}

// console.log(maxGap([-54, 37, 0, 64, 640, 0, -15]))
// console.log(maxGap([-7, -42, -809, -14, -12]))
// console.log(maxGap([-3, -27, -4, -2]))
console.log(maxGap([13, 10, 5, 2, 9]))