function dashatize(num) {
    // console.log(Math.sign(num))
    return String(Math.abs(num))
        .replace(/([13579])/g, "-$1-")
        .replace(/--/g, '-')
        .replace(/^-|-$/g, '')
}

console.log(dashatize(274))
console.log(dashatize(0))
console.log(dashatize(1))
console.log(dashatize(974302))
console.log(dashatize(-28369))