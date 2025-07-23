# Simple Syntax Tokenization
In this kata, you must create a function, called tokenise, which takes a string and turns it into a list of tokens. For example:
```
tokenise(String) => [ String | [ String | .. ] ] // arrays may be nested and/or empty

tokenise("A + B * C") === [ "A", "+", "B", "*", "C" ]

tokenise("function a(arg, arg)") === [ "function", "a", [ "arg", ",", "arg" ] ]
```

This function does not reduce, and is completely ignorant of context. It simply splits up a string, as a sort of parsing precursor. However, it does understand parentheses. To demonstrate:

```
tokenise(", () +&") === [ ",", [], "+&" ]
```
```
tokenise("Mismatched bracket )") === null
```

A token can be either a series of alphabetical characters or a string whose characters are all one of !#$%&*+-/<=>@^_.,;. These can be thought of as 'identifiers' and 'operators'. Tokens are seperated either by character type or whitespace. For example:

```
tokenise("i++") === [ "i", "++" ]
```

```
tokenise("a b@c") === [ "a", "b", "@", "c" ]
```

More examples are given in the example test cases.

(Any translations would be much appreciated.)

Strings Parsing Algorithms

[link](https://www.codewars.com/kata/599a0d02755eae7070000079/train/javascript)