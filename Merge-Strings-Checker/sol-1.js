function isMerge(s, part1, part2) {
    // check for base case  if s is empty return true only if part1 and part2 also empty
    if (!s) {
        return !(part1 || part2)
    }
    // check for first char in part1 matces first char in string
    if (s[0] == part1[0]) {
        if (isMerge(s.slice(1), part1.slice(1), part2)) {
            return true
        }
    }
    // check for second char in part1 matces first char in string
    if (s[0] == part2[0]) {
        if (isMerge(s.slice(1), part1, part2.slice(1))) {
            return true
        }
    }
    //  return false 
    return false

}

// console.log(isMerge('xcyc', 'xc', 'cy'))
// s:      x c y c = xcyc
// part1:  x c     = xc
// part2:    c y   = cy
/*===================*/
// s:      c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears
console.log(isMerge('xcyc', 'yc', 'xc'))
// console.log(isMerge('codewars', 'cdw', 'oears'))
// console.log(isMerge('codewars', 'code', 'wras'))

console.log(isMerge('codewars', 'code', 'code'))
// console.log(isMerge('More progress', 'More ess', 'prso'))
// console.log(isMerge('Making progress', 'Mak pross', 'inggre'))
