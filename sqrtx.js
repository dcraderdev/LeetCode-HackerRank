// 69. Sqrt(x)
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

var mySqrt = function(x) {
  if(x<2) return x
  let left=0,right=x/2
  while(left<=right){
      const mid=Math.floor((left+right)/2)
      if(mid*mid<=x && x<(mid+1)*(mid+1)){
          return mid
      }else if((mid*mid)>x){
          right=mid-1
      }else{
          left=mid+1
      }
  }
  return -1
};

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:



// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.