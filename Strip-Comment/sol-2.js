function solution(text, markers) {
    const m = markers.map((marker) => {
        return '\\' + marker
    }).join('')
    const rgx = new RegExp(`[${m}].*`, 'gm')
    // console.log(rgx)
    return text.replaceAll(rgx, '').replaceAll(/\s*$/gm, '')

}
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!", "+"]))
console.log(solution("aa # bb\ncc dd", ["#"]))