/*
  Title:
    Calculate average
    
  Description:
    Write a function which calculates the average of the numbers in a given list.

  Notes:
    Empty arrays should return 0.
    
*/

// Now Solution
function find_average(array) {
    return array.length ? array.reduce((a, b) => a + b) / array.length : 0
}
