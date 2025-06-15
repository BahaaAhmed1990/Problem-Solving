function automorphic(n) {

    return RegExp(`${n}$`).test(n * n) ? 'Automorphic' : "Not!!" // your code here
}
// console.log(automorphic(25))
console.log(automorphic(1))