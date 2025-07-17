# Ipv6
First, validate whether a string is a valid IPv6 address. If it is not valid, return False. If it is valid, return the same address reformatted to the shortest possible length, in all lowercase characters.

An IPv6 address is a hexidecimal representation of a 128-bit number. It is divided into eight groups of digits containing two octets (16 bits) each, separated by colons. In other words, each of the 8 groups will range from 0 to ffff.

Each group must contain one, two, three, or four characters. Leading zeroes in a group can be omitted. For optimal length, they must be omitted.

One or more consecutive groups of zeros can be eliminated, leaving only two colons ("::"). This can be done only once per address. For optimal length, the longest consecutive group of zeros should be eliminated this way. Also, in a correct response, only two or more consecutive groups should be eliminated this way; a single group of zero should be left as-is.

Leading and trailing double-colons (e.g. ::1, 2002:1717:e6d9::) are legal, and, in some solutions, required. An address of all zeros should be represented as just "::".

Lowercase and uppercase hexadecimal digits (a-f, A-F) are legal and may even be mixed. The returned address should contain only lowercase characters.

### Examples:
```
// All leading zeros removed, group of zeros eliminated
contractV6('2001:0470:0000:0064:0000:0000:0000:2') === '2001:470:0:64::2';

// Uppercase converted to lowercase, single eliminated group of zeros expanded
contractV6('2A03:2880:2130:CF05:FACE:B00C::1') === '2a03:2880:2130:cf05:face:b00c:0:1';

// Contains an illegal character
contractV6('2607:G8B0:4010:801::1004') === false;

// Too many double-colons
contractV6('2001:470::76::2') === false;

// Too many groups
contractV6('2a02:0cb41:0:0:0:0:0:0:7') === false;

// Not enough groups and no double-colon
contractv6('2620:0:863:ed1a:0:1') === false;

// Expansion of double-colon would make address too long
contractV6('2600:1406:34:0:0:0::b819:3854')
```
[link](https://www.codewars.com/kata/54fa4e210609868fce0002bf/train/javascript)