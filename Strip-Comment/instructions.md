# Strip Comment
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

## Example:

Given an input string of:

apples, pears # and bananas<br>
grapes<br>
bananas !apples<br>
The output expected would be:<br>

apples, pears<br>
grapes<br>
bananas<br>
The code would be called like so:<br>

```
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
```

[link](https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript)