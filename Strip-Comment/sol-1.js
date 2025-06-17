function solution(text, markers) {
    // TODO
    return text.split('\n').map((line) => {
        for (const marker of markers) {
            const escaped = marker.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const rgx = RegExp(`${escaped}.*`, 'g')
            console.log(rgx)
            line = line.replace(rgx, '')
        }
        return line.trimEnd()
    }).join('\n')
}
// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!", "+"]))
console.log(solution("aa # bb\ncc dd", ["#"]))