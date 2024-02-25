// 83. Remove Duplicates from Sorted List
// Easy
// Topics
// Companies
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {

  var temp = head;

  while(temp !== null){

      if((temp.next !== null) && temp.val === temp.next.val){
          var next_next = temp.next.next;
          var nodeToDelete = temp.next;
          temp.next = next_next;
          delete(nodeToDelete);
      }else{
          temp = temp.next;
      } 
  }
  return head;
  
};

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]