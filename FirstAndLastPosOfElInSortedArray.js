// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function(nums, target) {
  let start = 0;
  let end = nums.length-1;
  let res1 = -1
  let res2 = -1

  while(start <= end){

      if(nums[start] === target){
           res1 = start
      }else{
      start ++
      }
       if(nums[end] === target){
           res2 = end
      }else{
      end --
      }
  if(res1!= -1 && res2 !=-1){
      return [res1, res2]
  }
  }
  return [res1,res2]
};

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]