// 14. Longest Common Prefix
// Easy
// 15.4K
// 4.2K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


var longestCommonPrefix = function(strs) {

  if(!strs) return ''
  if(strs.length === 1) return strs[0]


  let prefix = strs[0]
  let numIterations = prefix.length
  
  for(let i = 1; i < strs.length; i++){

    
    let currentWord = strs[i]
    let tempPrefix = ''



    numIterations = Math.min(currentWord.length, numIterations)
    console.log(numIterations);

    // if on 2nd loop and no common prefix, return ''
    if(!prefix.length) {
      console.log('returning prefix 1',prefix);
      return prefix
    }

    for(let j = 0; j < numIterations; j++){

      if(currentWord[j] === prefix[j]){
        console.log('yes');
        tempPrefix += currentWord[j]
      } else {
        console.log( 'not equivilent', 'currentWord', currentWord, currentWord[j] , 'prefix',prefix, prefix[j]);
        prefix = tempPrefix
      }
    }
    prefix = tempPrefix


  }
  console.log('returning prefix 2',prefix);
return prefix

    
};




var longestCommonPrefixFast = function(strs) {
  if(!strs.length) return ''
  let longest = ''
  for(let i=0; i< strs[0].length; i++) {
      let char = strs[0][i]
      if(!char) return ''
      if(strs.every(str => str[i] === char)) {
          longest+=char
      } else break
  }
  return longest
};




let testInput1 = ["flower","flow","flight"]
let testInput2 = ["dog", "at", "racecar","car"]
let testInput3 = ["ab", "a"]



// console.log(longestCommonPrefix(testInput1));
// console.log(longestCommonPrefix(testInput2));
console.log(longestCommonPrefix(testInput3));





// console.log(longestCommonPrefixFast(testInput1));
// console.log(longestCommonPrefixFast(testInput2));
console.log(longestCommonPrefixFast(testInput3));