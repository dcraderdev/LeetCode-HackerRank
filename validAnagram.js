// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.




var isAnagram = function(s, t) {

  if(s.length !== t.length) return false

  sMap = {}  
  tMap = {}  


  for(let i = 0; i < s.length; i++){
    let sChar = s[i]
    let tChar = t[i]

    sMap[sChar] ? sMap[sChar]++ : sMap[sChar] = 1
    tMap[tChar] ? tMap[tChar]++ : tMap[tChar] = 1
  }


for(const [key,value] of Object.entries(sMap)){

    if(!tMap[key] || tMap[key] !== sMap[key]){
      return false
    }

  }

  return true


    
};


// console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "sar"));

