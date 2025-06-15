function tidyNumber(n) {
    //your code here
    return /^0*1*2*3*4*5*6*7*8*9*$/.test(n.toString());
}

console.log(tidyNumber(12))
console.log(tidyNumber(102))
console.log(tidyNumber(9762))
console.log(tidyNumber(235))