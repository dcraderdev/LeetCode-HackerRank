// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.


// Constraints:
// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?


const isPalindrome = (x) => {

  return x.toString().split('').reverse().join('') == x
  
};


let x = 121
console.log(isPalindrome(x));
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:


x = -121
console.log(isPalindrome(x));
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:


x = 10
console.log(isPalindrome(x));
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.