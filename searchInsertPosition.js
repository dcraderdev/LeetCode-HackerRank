// 35. Search Insert Position
// Easy
// Topics
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
  function mergeSort(arr,target,left,right){
      if(left>right){
           return left
      }
      const mid=Math.floor((left+right)/2)
      if(arr[mid]==target) return mid
      else if(arr[mid]<target){
          return mergeSort(arr,target,mid+1,right)
      }else{
          return mergeSort(arr,target,left,mid-1)
      }
  }

  return mergeSort(nums,target,0,nums.length-1)
};

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104