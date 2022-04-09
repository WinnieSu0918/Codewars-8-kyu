/*
  Title:
    Enumerable Magic #25 - Take the First N Elements
    
  Description:
    Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
    
*/

// Now Solution
function take(arr, n) {
    return arr.slice(0,n)
}