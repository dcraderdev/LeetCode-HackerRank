// // 21. Merge Two Sorted Lists

const e = require("express");

// // You are given the heads of two sorted linked lists list1 and list2.

// // Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// // Return the head of the merged linked list.

//  /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**

// // Example 1:


// // Input: list1 = [1,2,4], list2 = [1,3,4]
// // Output: [1,1,2,3,4,4]
// // Example 2:

// // Input: list1 = [], list2 = []
// // Output: []
// // Example 3:

// // Input: list1 = [], list2 = [0]
// // Output: [0]


//  * Definition for singly-linked list.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {

  if(!list1) return list2
  if(!list2) return list1

  let dummy = new ListNode()
  let current = dummy


  while(list1 || list2){

    if(list1 && (!list2 || list1.val <= list2.val)){
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next

  }
  return dummy.next
 };



// Helper function to convert array to linked list
function arrayToList(arr) {
  if(arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for(let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let list1 = arrayToList([1,2,4])
let list2 = arrayToList([1,3,4]) // Output: [1,1,2,3,4,4]
 
// let list1 = [], list2 = [] // Output: []
// let list1 = [], list2 = [0] // Output: [0]

console.log('----');
console.log(mergeTwoLists(list1,list2));




