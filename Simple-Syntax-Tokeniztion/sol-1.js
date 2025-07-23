function tokenise(string) {
    // test for one bracket
    if (/\(|\)/g.test(string)) {
        let openParaCount = string.match(/\(/g) ? string.match(/\(/g).length : 0
        let closeParaCount = string.match(/\)/g) ? string.match(/\)/g).length : 0
        console.log(openParaCount, closeParaCount)
        if (openParaCount !== closeParaCount) {
            return null;
        }
    }
    let tokens = [];
    let word = '';

    while (string !== '') {
        let curChar = string.slice(0, 1);
        console.log('curr char', curChar);

        // char is space
        if (curChar === ' ') {
            // console.log('space char');
            if (word === '') {
                string = string.slice(1)
                continue
            }
            tokens.push(word);
            word = ''
            string = string.slice(1)
            continue;
        }

        // paraentheses expresstion
        if (curChar === '(') {
            if (word !== '') {
                tokens.push(word)
                word = ''
            }
            let depth = 0, i = 0;
            do {
                if (string[i] === '(') {
                    depth++
                } else if (string[i] === ')') {
                    depth--
                }
                i++
            } while (i < string.length && depth > 0);
            if (depth !== 0) {
                return null
            }
            let paraContent = string.slice(1, i - 1);
            tokens.push(tokenise(paraContent));
            string = string.slice(i)
            continue;
        }
        // non char
        if (/[\W_]/g.test(curChar)) {
            console.log('none letter', curChar)
            // word has letters
            if (/[a-zA-Z\d]/g.test(word)) {
                tokens.push(word);
                word = ''
            }
            word += curChar;
            string = string.slice(1)
            continue;

        }
        // letter char
        if (/\w/g.test(curChar)) {
            console.log('letter', curChar)
            if (/\W/g.test(word)) {
                tokens.push(word);
                word = ''
            }
            word += curChar;
            string = string.slice(1)
            continue;
        }
    }
    word === '' ? null : tokens.push(word)
    return tokens
}
// console.log(tokenise(""))// []
// console.log(tokenise("ds^!(sd+%%(ZZaddu))^&(())-(<=>)"))// []
// console.log(tokenise("//uh"))// []
// console.log(tokenise("()"))// [[]]
// console.log(tokenise("a (Word)"))// ["a", ["Word"]]
// console.log(tokenise("These are tokens."))// ["These", "are", "tokens", "."]
// console.log(tokenise("add(a, b) = a + b"))// ["add", ["a", ",", "b"], "=", "a", "+", "b"]
// console.log(tokenise("A *(B ^& C)")) //["A", "*", ["B", "^&", "C"]]
// console.log(tokenise("do $ readLine >>= putStrLn"))// ["do", "$", "readLine", ">>=", "putStrLn"]
// console.log(tokenise("A single mismatched bracket ("))//, null
// console.log(tokenise(")"))//, null
// console.log(tokenise("(((())))))(())"))//, null

// console.log(tokenise("fgh^(das+_^ygrE(ssd))//UJ"))// ["add", ["a", ",", "b"], "=", "a", "+", "b"]
