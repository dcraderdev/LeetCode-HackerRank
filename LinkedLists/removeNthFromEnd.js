// given the head of a linked list,., remove the nth node from the end of the list and return its head

// input head = [1,2,3,4,5], n = 2
// output [1,2,3,5]

//  * For your reference:
//  *
//  * SinglyLinkedListNode {
//  *     int data;
//  *     SinglyLinkedListNode next;
//  * }


function removeNthFromEnd(head, n) {
  if(head === null) return null
  
  let lengthOfList = 0
  let temp = head
  
  // get length of list
  while(temp !== null){
      lengthOfList++
      temp = temp.next
  }
  
  //if we need to remove the head
  if(lengthOfList === n) return head.next
  
  temp = head;
  for(let i = 0; i < lengthOfList - n -1; i++){
      temp = temp.next
  }
  
  temp.next = temp.next.next;
  return head
  

}

let head = [1,2,3,4,5]
let n = 2
// output [1,2,3,5]


removeNthFromEnd(head, n)

