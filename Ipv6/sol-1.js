
function contractV6(address) {

  // test for ::: or more
  if (/:{3,}/g.test(address)) {
    console.log('more than two consective columns')
    return false
  }

  // get number of double columns ::
  let regex = /:{2,}/g;
  let columns = address.match(regex) ? address.match(regex).length : 0
  console.log('columns', columns)

  // :: > 1 invaild ip
  if (columns >= 2) {
    console.log('too many columns')
    return false
  }
  // :: = 1 number of other groups maximum 7
  let addGroup = address.split(':');
  if (columns === 1 && !(addGroup.length <= 8)) {
    console.log('one column two many groups')
    return false
  }

  // :: = 0 number of other groups = 8
  if (columns === 0 && !(addGroup.length === 8)) {
    console.log('no column wrong groups count')
    return false
  }

  // check valid characters
  const validChars = addGroup.every(group => {
    return /^[\d|A-F]{1,4}$/gi.test(group) || group === ''

  })
  if (!validChars) {
    console.log('invalid charchter')
    return false
  }

  // reformat Ip

  // omit group leading zeros && convert to lowercase
  let optAddress = address.toLowerCase()
    .replace(/\b0+(?=[1-9a-f])/g, '') // omit leading zeros
    .replace(/\b(0){2,4}/g, '0') //omit four zeros
  // columns zero 
  if (columns === 0) {
    let compressInedxF = true;
    return optAddress.replace(/((:|\b)0(:|\b)){2,}/g, function (match) {
      if (compressInedxF) {
        compressInedxF = false;
        return '::'
      } return match
    }) // omit consective groups of zeros
  }
  if (columns === 1) {
    // 0:0::0:0
    if (/((:|\b)0)+::(0(:|\b))+|((:|\b)0)+::|::(0:?)+/g.test(optAddress)) {
      console.log('0:0::0:0')
      return optAddress.replace(/((:|\b)0)+::(0(:|\b))+|((:|\b)0)+::|::(0:?)+/g, '::')
    }
    // four zeros 
    if (/(0(:|\b)){3,4}/g.test(optAddress)) {
      console.log('four separate zeros')
      optAddress = optAddress.replace('::', ':0:0:').replace(/(0(:|\b)){3,4}/g, ':')
      if (optAddress.endsWith(':') && !optAddress.endsWith('::')) {
        return optAddress.slice(0, -1)
      }
      return optAddress
    }
    // two zeros
    if (/(0(:|\b)){2}/g.test(optAddress) && !optAddress.endsWith('::')) {
      let compressInedxS = true
      console.log('two separate zeros')
      optAddress = optAddress.replace('::', ':0:0:').replace(/(0(:|\b)){2}/g, function (match) {
        if (compressInedxS) {
          compressInedxS = false
          return ':'
        } return match
      })

      if (optAddress.endsWith(':') && !optAddress.endsWith('::')) {
        return optAddress.slice(0, -1)
      }
      return optAddress
    }
    // seven groups
    console.log(optAddress.split(':').length)
    if (optAddress.split(':').length === 8) {
      return optAddress.replace('::', ':0:')
    }
  }

  // console.log('OPT', optAddress)
  return optAddress

}

// console.log(contractV6('2001:0470:0000:0064:0000:0000:0000:2'))// '2001:470:0:64::2';
// console.log(contractV6('0:0:0:0:0:0:0:1'))
// console.log(contractV6('1:1:0:0:9:0:0:1'))
// console.log(contractV6('0:0:0:0:0:0:0:0'))
// console.log(contractV6('000:5E:0C:02:030:05:0:DE00'))

console.log(contractV6('2001::0A01:0:0'))
console.log(contractV6('2001::0A01:0:0:0:0'))
console.log(contractV6('2001:0:0:0:0:0A01::'))
console.log(contractV6('2001:0:0:0A01::'))
console.log(contractV6('1:1:0:0:1::1'))

// console.log(contractV6('2001:0:0:0A01::'))
// console.log(contractV6('2001:0470:0:0::'))
// console.log(contractV6('::'))
// console.log(contractV6('2001::0'))
// console.log(contractV6('2A03:2880:2130:CF05:FACE:B00C::1'))// '2a03:2880:2130:cf05:face:b00c:0:1');



// console.log(contractV6('2607:G8B0:4010:801::1004'))// false
// console.log(contractV6('2001:470::76::2'))//, false);
// console.log(contractV6('2a02:0cb41:0:0:0:0:0:0:7'))//, false);
// console.log(contractV6('2620:0:863:ed1a:0:1'))//, false);
// console.log(contractV6('2600:1406:34:0:0:0::b819:3854'))//, false);
// console.log(contractV6('2001:::'))//, false);
