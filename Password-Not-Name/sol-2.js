function validate(username, password) {
    //your code here
    const half = Math.ceil(Math.min(username.length, password.length) / 2);
    for (let index = 0; index < password.length - half; index++) {
        if (username.includes(password.slice(index))) return false
    }
    console.log(half)
    return true
}


// console.log(validate("", ""))//, false)
// console.log(validate("username", "myname"))//, false)
console.log(validate("sword", "password"))//, false)
// console.log(validate("qwertyuiop", "asdfghjkl"))//, true)
// console.log(validate("MASH", "M*A*S*H"))//, true)
// console.log(validate("asdfghjkl", "lkjhgfdsa"))//, true)
// console.log(validate('abc', 'abddddddddd'))//, false)
// console.log(validate('abc', 'abd'))//, false)
// console.log(validate('abcdefg', 'ggbcdeg'))//, false)
// console.log(validate('abcd', 'bcef'))//, false)
// console.log(validate('12345678', '1234***678'))//, false)
// console.log(validate("[];',().aaaah", "[];',().ooooh"))//, false)