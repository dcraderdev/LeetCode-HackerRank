// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.



var isValid2 = function(s) {
  let stack = [];
  let mapping = {
      ')': '(',
      ']': '[',
      '}': '{'
  };

  for(let char of s) {
      if(mapping[char]) {
          let topElement = stack.pop() || '#';
          if(topElement !== mapping[char]) {
              return false;
          }
      } else {
          stack.push(char);
      }
  }

  return !stack.length;
};





var isValid = function(s) {

  if(!s || s.length === 1){
    return false
  }
  let stack = []
  let parentMap = {
     ')' : '(',
     ']' : '[',
     '}' : '{',
  }

  for(let char of s){
    if(parentMap[char]){
      let topChar = stack.pop() || '#'
        if(topChar !== parentMap[char]){
          return false
        }
    } else {
      stack.push(char)
  }
}
  return !stack.length
}


var isValidSwitchCase = function(s) {   
  const stack = [];
  
  for (let i = 0 ; i < s.length ; i++) {
      let c = s.charAt(i);
      switch(c) {
          case '(': stack.push(')');
              break;
          case '[': stack.push(']');
              break;
          case '{': stack.push('}');
              break;
          default:
              if (c !== stack.pop()) {
                  return false;
              }
      }
  }
  
  return stack.length === 0;
};





// Test cases
// console.log(isValid("()"));        // true
// console.log(isValid("()[]{}"));    // true
// console.log(isValid("(]"));        // false
// console.log(isValid("({[]})"));    // true


console.log(isValid("(("));        // false

