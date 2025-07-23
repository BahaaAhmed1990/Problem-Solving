function validate(username, password) {
    //your code here
    if (username === '' || password === '') {
        return false
    }
    if (username.length > password.length) {
        console.log('pass', password.length)
        for (let i = 0; i < password.length; i++) {
            console.log('pass I', i)
            for (let j = password.length; j > 0; j--) {
                console.log('pass J', j)
                let substr = password.slice(i, j);
                if (substr.length >= password.length / 2 && username.includes(substr)) {
                    console.log('substr', substr)
                    return false
                }
            }
            console.log('========')

        }
    } else {
        console.log('usr', username.length)
        for (let i = 0; i < username.length; i++) {
            console.log('usr I', i)
            for (let j = username.length; j > 0; j--) {
                console.log('usr J', j)
                let substr = username.slice(i, j);
                if (substr.length >= username.length / 2 && password.includes(substr)) {
                    console.log('substr', substr)
                    return false
                }
            }
            console.log('========')

        }
    }
    return true
}


// console.log(validate("", ""))//, false)
// console.log(validate("username", "myname"))//, false)
// console.log(validate("sword", "password"))//, false)
// console.log(validate("qwertyuiop", "asdfghjkl"))//, true)
// console.log(validate("MASH", "M*A*S*H"))//, true)
// console.log(validate("asdfghjkl", "lkjhgfdsa"))//, true)
// console.log(validate('abc', 'abddddddddd'))//, false)
// console.log(validate('abc', 'abd'))//, false)
// console.log(validate('abcdefg', 'ggbcdeg'))//, false)
// console.log(validate('abcd', 'bcef'))//, false)
// console.log(validate('12345678', '1234***678'))//, false)
console.log(validate("[];',().aaaah", "[];',().ooooh"))//, false)