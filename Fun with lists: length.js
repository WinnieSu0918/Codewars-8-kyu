/*
  Title:
    Fun with lists: length
    
  Description:
    Implement the method length, which accepts a linked list (head), and returns the length of the list.
    
  Examples:
    function Node(data, next = null) {
        this.data = data;
        this.next = next;
    }
    
  Notes:
    the list may be null and can hold any type of value.
    
*/

// Now Solution
function length(head) {
    let count = 0;
    while(head) {
      head = head.next;
      count++;
    }
    return count;
}